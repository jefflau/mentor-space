import Questions from './collection'
import Answers from '../answers/collection'

export default {
  Query: {
    questions(object, arguments, { userId }) {
      return Questions.find().fetch()
    },
    question(object, { id }, { userId }) {
      return Questions.findOne(id)
    }
  },
  Question: {
    answers(question) {
      let id = question._id
      return Answers.find({ questionId: id }).fetch()
    }
  },
  Mutation: {
    createQuestion(object, { name, content }, { userId }) {
      //check if user is logged in
      const user = Meteor.users.findOne(userId)
      if (userId && user.role === 'admin') {
        const questionId = Questions.insert({
          name,
          content,
          author: userId
        })
        return Questions.findOne(questionId)
      }

      throw new Error('Unauthorised')
    }
  }
}
