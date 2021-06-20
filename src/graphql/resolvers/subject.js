import {
  studentController as StudentController,
  subjectController as SubjectController,
} from '../../server'

export default {
  getSubjects: () => SubjectController.get({}),

  getAllStudentsOfASubject: async (subject, {}) => {
    console.log(subject)
    return await SubjectController.getAllStudentsOfASubject(subject.id)
  },

  getSubject: (_, { subjectId }) => SubjectController.getById(subjectId),

  createSubject: (_, { name, students }) =>
    SubjectController.add({ name, students }),

  addStudentsToSubject: async (_, { subjectId, studentIds }) => {
    const added = await SubjectController.addStudentToSubject(
      subjectId,
      studentIds
    )
    for (const studentId of studentIds) {
      StudentController.addSubjectToStundent(studentId, [subjectId])
    }
    return added
  },

  removeStudentFromSubject: async (_, { studentId, subjectId }) => {
    await StudentController.removeSubjectFromStudent(studentId, subjectId)
    await SubjectController.removeStudentFromSubject(subjectId, studentId)
    return true
  },

  deleteSubject: async (_, { subjectId }) => {
    const subject = await SubjectController.getById(subjectId)
    if (!subject) return 'No Students Found'
    if (subject.students.length > 0)
      for (const studentId of subject.students) {
        StudentController.removeSubjectFromStudent(studentId, subId)
      }
    return StudentController.deleteById(studentId)
  },
}
