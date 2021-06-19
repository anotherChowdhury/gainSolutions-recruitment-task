import BaseController from './baseController'

class StudentController extends BaseController {
  constructor(model) {
    super(model)
    this._model = model
  }

  addSubjects(studentId, subjectsIdList) {
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

  removeSubjectFromStudent(studentId, subjectId) {
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

  getAll() {
    return this.model.find({}).populate('subjects')
  }

  async getallSubjectsOfAStudent(studentId) {
    const { subjects } = await this._model
      .findById(studentId)
      .populate('subjects')
    return subjects
  }
}

export default StudentController
