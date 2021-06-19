import BaseController from './baseController'
import Student from '../models/student'
class StudentController extends BaseController {
  constructor() {
    super(Student)
    this._model = Student
  }

  async addSubjects(studentId, subjectsIdList) {
    return this._model.findByIdAndUpdate(
      studentId,
      {
        $addToSet: {
          subjects: { $each: subjectsIdList },
        },
      },
      {
        new: true,
      }
    )
  }

  async removeSubjectFromStudent(studentId, subjectId) {
    return this._model.updateOne(
      studentId,
      {
        $pull: {
          subjects: subjectId,
        },
      },
      {
        new: true,
      }
    )
  }
}

export default StudentController
