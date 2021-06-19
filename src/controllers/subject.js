import BaseController from './baseController'

class SubjectController extends BaseController {
  constructor() {
    super(model)
    this._model = model
  }

  async addStudents(subjectId, studentIdList) {
    return this._model.updateOne(
      subjectId,
      {
        $addToSet: {
          students: { $each: studentIdList },
        },
      },
      {
        new: true,
      }
    )
  }

  async removeStudentFromSubject(subjectId, studnetId) {
    return this._model.updateOne(
      subjectId,
      {
        $pull: { students: studnetId },
      },
      { new: true }
    )
  }

  async getallStudentsOfASubject(subjectId) {
    const { students } = await this._model
      .findById(subjectId)
      .populate('students')
    return students
  }
}

export default SubjectController
