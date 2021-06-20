const SubjectTypeDefs = `
  type Subject{
    id: ID!,
    name: String!
    students:[Student]
  }

  extend type Query {
    getSubjects:[Subject]
    getSubject(id:ID!):Subject
    getSubjectByName(name:String!):Subject
  }

  extend type Mutation {
    createSubject(name:String!,students:[ID]):Subject
    updateSubject(subjectId:ID!,name:String,students:[ID]):Subject
    addStudentsToSubject(subjectId:ID!,studentIds:[ID!]!):Subject
  }
`

export default SubjectTypeDefs
