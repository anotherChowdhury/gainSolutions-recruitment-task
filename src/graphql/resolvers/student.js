import {
  studentController as StudentController,
  subjectController as SubjectController,
} from '../../server'

export default {
  getStudents: () => StudentController.get({}),
  getStudent: (_, { studentId }) => StudentController.getById(studentId),

  getAllSubjectByAStudent: async (student, {}) =>
    await StudentController.getAllSubjectsOfAStudent(student.id),

  createStudent: (_, { name, email, birthDate, subjects }) =>
    StudentController.add({ name, email, birthDate, subjects }),

  addSubjectsToStudent: async (_, { studentId, subjectIds }) => {
    console.log('here in student resolver')
    const added = await StudentController.addSubjects(studentId, subjectIds)
    for (const subId of subjectIds) {
      await SubjectController.addStudents(subId, [studentId])
    }
    return added
  },

  removeSubjectFromStudent: async (_, { studentId, subjectId }) => {
    await SubjectController.removeStudentFromSubject(subjectId, studentId)
    return await StudentController.removeSubjectFromStudent(
      studentId,
      subjectId
    )
  },

  deleteStudent: async (_, { studentId }) => {
    const student = await StudentController.getById(studentId)
    if (!student) return 'No Students Found'
    if (student.subjects.length > 0)
      for (const subId of student.subjects) {
        await SubjectController.removeStudentFromSubject(subId, studentId)
      }
    return StudentController.deleteById(studentId)
  },
}
