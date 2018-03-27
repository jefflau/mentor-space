import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

const Questions = new Mongo.Collection('questions')

const schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 200
  },
  content: {
    type: String,
    label: 'Content',
    max: 2000
  },
  author: {
    type: String,
    label: 'Author'
  },
  createdAt: {
    type: Date,
    label: 'Created At'
  }
})

Questions.attachSchema(schema)

export default Questions
