import { Types } from 'mongoose'
class BaseController {
  constructor(model) {
    this._model = model
  }

  async add(properties) {
    return this._model.create({
      _id: Types.ObjectId(),
      ...properties,
    })
  }

  async getById(id) {
    return this._model.findById(id)
  }

  async deleteById(id) {
    return this._model.deleteById(id)
  }

  async getByName(name) {
    return this._model.findOne({ name })
  }

  async get(conditions) {
    console.log('In base controller get function')
    return this._model.find(conditions)
  }
}

export default BaseController
