const StudentTypeDefs = `
  type Student{
    id: ID!,
    name: String!
    email: String!
    subjects:[Subject]
  }

  extend type Query {
    getStudents:[Student]
    getStudent(id:ID!):Student
    getStudentByName(name:String!):Student
  }

  extend type Mutation {
    createStudent(name:String!,email:String!,subject:[ID]):Student
    updateStudent(studentId:ID!,name:String,email:String,subjects:[ID]):Student
  }
`

export default StudentTypeDefs
