import { model, Schema } from 'mongoose'
const { Types } = Schema

const studentSchema = new Schema({
  _id: Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  subjects: [{ type: Types.ObjectId, ref: 'Subject' }],
})

export default model('Student', studentSchema)
