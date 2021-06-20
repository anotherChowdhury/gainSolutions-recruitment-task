import StudentResolver from './student'
import SubjectResolver from './subject'

export default {
  Student: {
    subjects: StudentResolver.getAllSubjectByAStudent,
  },

  Subject: {
    students: SubjectResolver.getAllStudentsOfASubject,
  },

  Query: {
    getSubject: SubjectResolver.getSubject,
    getSubjects: SubjectResolver.getSubjects,
    getStudent: StudentResolver.getStudent,
    getStudents: StudentResolver.getStudents,
  },

  Mutation: {
    createStudent: StudentResolver.createStudent,
    createSubject: SubjectResolver.createSubject,
    addSubjectsToStudent: StudentResolver.addSubjectsToStudent,
    addStudentsToSubject: SubjectResolver.addStudentsToSubject,
    removeSubjectFromStudent: StudentResolver.removeSubjectFromStudent,
  },
}
