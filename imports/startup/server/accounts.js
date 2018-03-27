import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Accounts.onCreateUser((options, user) => {
  const customizedUser = Object.assign(
    {
      role: 'user'
    },
    user
  )

  if (options.profile) {
    customizedUser.profile = options.profile
  }

  return customizedUser
})

if (Meteor.users.find().fetch().length < 1) {
  let userId = Accounts.createUser({
    username: 'admin',
    email: 'admin@admin.com',
    password: '123456',
    profile: {
      firstName: 'Admin',
      lastName: 'Nimda'
    }
  })

  console.log(userId)

  Meteor.users.update(
    { _id: userId },
    {
      $set: {
        role: 'admin'
      }
    }
  )
}
