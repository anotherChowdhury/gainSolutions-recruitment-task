import express from 'express'
import Student from './models/student'
import Subject from './models/subject'
import StudentController from './controllers/student'
import SubjectController from './controllers/subject'
import connectToDatabase from './connectToDatabase'

const studentController = new StudentController(Student)
const subjectController = new SubjectController(Subject)

connectToDatabase()
const app = express()

export default {
  studentController,
  subjectController,
  app,
}
