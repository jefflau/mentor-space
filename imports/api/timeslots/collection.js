import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

const Timeslots = new Mongo.Collection('timeslots')

// _id: String!
//   createdAt: String
//   teacherId: String
//   studentId: String
const schema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: 'Created At'
  },
  teacherId: {
    type: String,
    label: 'Teacher ID'
  },
  studentId: {
    type: String,
    label: 'Student ID',
    optional: true
  },
  notes: {
    type: String,
    label: 'Notes',
    optional: true
  }
})

Questions.attachSchema(schema)

export default Questions
