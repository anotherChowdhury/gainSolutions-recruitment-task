import BaseController from './baseController'

class SubjectController extends BaseController {
  constructor(model) {
    super(model)
    this._model = model
  }

  async addStudents(subjectId, studentIdList) {
    console.log('Here')
    return this._model.findByIdAndUpdate(
      { _id: subjectId },
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
    return this._model.findByIdAndUpdate(
      subjectId,
      {
        $pull: { students: studnetId },
      },
      { new: true }
    )
  }

  async getAllStudentsOfASubject(subjectId) {
    console.log('IN Subject Controller Function')
    const { students } = await this._model
      .findById(subjectId)
      .populate('students')
    console.log(students)
    return students
  }
}

export default SubjectController
