import { model, Schema } from 'mongoose'

const { Types } = Schema

const subjectSchema = new Schema({
  _id: Types.ObjectId,
  name: { type: String, required: true, unique: true },
  students: [
    {
      type: Types.ObjectId,
      ref: 'Student',
    },
  ],
})

export default model('Subject', subjectSchema)
