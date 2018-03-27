export default {
  Query: {
    user(object, arguments, { userId }) {
      if (arguments.id) {
        return Meteor.users.findOne(arguments.id)
      }
      return Meteor.users.findOne(userId) || {}
    },
    students(object, arguments, { userId }) {
      return Meteor.users.find({ role: 'student' }) || []
    }
  },
  User: {
    email: user => user.emails[0].address,
    username: user => user.username,
    firstName: user => (user.profile ? user.profile.firstName : null),
    lastName: user => (user.profile ? user.profile.lastName : null)
  }
}
