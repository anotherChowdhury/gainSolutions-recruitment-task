import express from 'express'
import Student from './models/student'
import Subject from './models/subject'
import StudentController from './controllers/student'
import SubjectController from './controllers/subject'
import connectToDatabase from './connectToDatabase'
import { ApolloServer } from 'apollo-server-express'
import StudentTypeDefs from './graphql/types/student'
import SubjectTypeDefs from './graphql/types/subject'
import IndexResolver from './graphql/resolvers/index.resolver'
import cors from 'cors'

const studentController = new StudentController(Student)
const subjectController = new SubjectController(Subject)

connectToDatabase()
const app = express()
app.use(cors())

const Query = `
  type Query {
    _empty: String
  }
`

const Mutation = `
  type Mutation {
    _empty: String
  }
`

const apolloServer = new ApolloServer({
  typeDefs: [Query, Mutation, StudentTypeDefs, SubjectTypeDefs],
  resolvers: IndexResolver,
})

apolloServer.applyMiddleware({ app })

app.listen(5000, () => console.log('Listning on port 5000'))

export { app, studentController, subjectController }
