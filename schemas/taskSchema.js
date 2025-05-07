// /graphql/schemas/taskSchema.js
const { buildSchema } = require('graphql');

const taskSchema = buildSchema(`
  type Task {
    id: ID!
    title: String
    description: String
    completed: Boolean
    createdAt: String
  }

  type Query {
    getAllTasks: [Task]
    getTask(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!, description: String!): Task
    updateTask(id: ID!, title: String, description: String, completed: Boolean): Task
    deleteTask(id: ID!): String
  }
`);

module.exports = taskSchema;
