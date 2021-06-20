import BaseController from './baseController'

class StudentController extends BaseController {
  constructor(model) {
    super(model)
    this._model = model
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

  async getAll() {
    return this.model.find({}).populate('subjects')
  }

  async getAllSubjectsOfAStudent(studentId) {
    console.log('In student controller fucntion ')
    const { subjects } = await this._model
      .findById(studentId)
      .populate('subjects')
    return subjects
  }
}

export default StudentController
