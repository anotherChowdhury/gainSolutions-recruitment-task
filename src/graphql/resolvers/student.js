import { StudentController, SubjectController } from '../../server'

export default {
  getStudents: () => StudentController.get({}),

  getStudent: (_, { studentId }) => StudentController.getById(studentId),

  getAllSubjectByAStudent: (student, {}) =>
    StudentController.getAllSubjectByAStudent(student.id),

  createStudent: (_, { name, email, birthDate, subjects }) =>
    StudentController.add({ name, email, birthDate, subjects }),

  addSubjectToStudent: async (_, { studentId, subjects }) => {
    const added = await StudentController.addSubjects(studentId, subjects)
    for (const subId of subjects) {
      SubjectController.addStudents(subId, [studentId])
    }
    return true
  },

  removeSubjectFromStudent: async (_, { studentId, subjectId }) => {
    await StudentController.removeSubjectFromStudent(studentId, subjectId)
    await SubjectController.removeStudentFromSubject(subjectId, studentId)
    return true
  },

  deleteStudent: async (_, { studentId }) => {
    const student = await StudentController.getById(studentId)
    if (!student) return 'No Students Found'
    if (student.subjects.length > 0)
      for (const subId of student.subjects) {
        SubjectController.removeStudentFromSubject(subId, studentId)
      }
    return StudentController.deleteById(studentId)
  },
}
