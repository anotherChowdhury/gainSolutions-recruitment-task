import subject from '../models/subject'
import Subject from '../models/subject'
import BaseController from './baseController'

class SubjectController extends BaseController {
  constructor() {
    super(Subject)
    this._model = subject
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

  async removeStudent(subjectId, studnetId) {
    return this._model.updateOne(
      subjectId,
      {
        $pull: { students: studnetId },
      },
      { new: true }
    )
  }
}

export default SubjectController
