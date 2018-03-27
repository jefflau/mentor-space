import casual from 'casual'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
// import Questions from '../../api/questions/collection'
// import Answers from '../../api/answers/collection'
// import Comments from '../../api/comments/collection'
// import Likes from '../../api/likes/collection'

// //Add 10 users
let users = []
// let questions = []
// let answers = []

// students
if (Meteor.users.find().fetch().length < 2) {
  for (let i = 0; i < 10; i++) {
    let email = casual.email
    let username = casual.username
    let userId = Accounts.createUser({
      email,
      username,
      password: casual.password,
      profile: {
        firstName: casual.first_name,
        lastName: casual.last_name
      }
    })
    users.push(userId)
    console.log('adding test user:', username, userId)

    Meteor.users.update(
      { _id: userId },
      {
        $set: {
          role: 'student'
        }
      }
    )
  }
}

// if (Questions.find().fetch().length < 1) {
//   for (let i = 0; i < 10; i++) {
//     let name = casual.short_description
//     let admin = Meteor.users.findOne({ username: 'admin' })
//     let createdAt = new Date()
//     let questionId = Questions.insert({
//       name,
//       content: casual.sentences((n = 2)),
//       author: admin._id,
//       createdAt
//     })
//     questions.push(questionId)
//     console.log('Adding test data Question:  ', questionId, name)
//   }
// }

// if (Answers.find().fetch().length < 1) {
//   users.forEach((user, i) => {
//     const createdAt = new Date()
//     const randomString = () => {
//       const randomNum = _.random(100000, 999999)
//       return randomNum.toString(24)
//     }
//     const randomTitle = randomString()
//     console.log('test data randomTitle', randomTitle)
//     answers.push(
//       Answers.insert({
//         content: casual.sentences((n = 3)),
//         userId: user,
//         questionId: questions[i],
//         createdAt: createdAt.setDate(createdAt.getDate() - 1),
//         title: randomTitle,
//         endTime: '19:00',
//         public: true,
//         images: [
//           'https://picsum.photos/1024/768?image=0',
//           'https://picsum.photos/1024/768?image=2',
//           'https://picsum.photos/1024/768?image=3'
//         ]
//       })
//     )

//     if (i < 5) {
//       answers.push(
//         Answers.insert({
//           content: casual.sentences((n = 3)),
//           userId: user,
//           questionId: questions[i + 1],
//           createdAt,
//           endTime: '19:00',
//           public: true,
//           title: randomString(),
//           images: [
//             'https://picsum.photos/1024/768?image=' + (i + 10),
//             'https://picsum.photos/1024/768?image=2' + (i + 11),
//             'https://picsum.photos/1024/768?image=3' + (i + 12)
//           ]
//         })
//       )
//       answers.push(
//         Answers.insert({
//           content: casual.sentences((n = 3)),
//           userId: user,
//           questionId: questions[i + 2],
//           createdAt,
//           endTime: '19:00',
//           public: true,
//           title: randomString(),
//           images: [
//             'https://picsum.photos/1024/768?image=' + (i + 13),
//             'https://picsum.photos/1024/768?image=2' + (i + 14),
//             'https://picsum.photos/1024/768?image=3' + (i + 15)
//           ]
//         })
//       )
//       answers.push(
//         Answers.insert({
//           content: casual.sentences((n = 3)),
//           userId: user,
//           questionId: questions[i + 3],
//           createdAt,
//           endTime: '19:00',
//           public: true,
//           title: randomString(),
//           images: [
//             'https://picsum.photos/1024/768?image=' + (i + 13),
//             'https://picsum.photos/1024/768?image=2' + (i + 14),
//             'https://picsum.photos/1024/768?image=3' + (i + 15)
//           ]
//         })
//       )
//     }
//   })
// }

// answers.forEach(a => console.log(a))

// if (Comments.find().fetch().length < 1) {
//   answers.forEach((answer, i) => {
//     let comments = []
//     let timeObject = new Date()

//     let c1 = Comments.insert({
//       content: casual.sentences((n = 30)),
//       userId: users[1],
//       answerId: answer,
//       parentId: null,
//       createdAt: new Date(timeObject.getTime() + 100000)
//     })

//     comments.push(c1)

//     if (i < 5) {
//       c2 = Comments.insert({
//         content: casual.sentences((n = 30)),
//         userId: users[2],
//         answerId: answer,
//         parentId: c1,
//         createdAt: new Date(timeObject.getTime() + 200000)
//       })
//       c3 = Comments.insert({
//         content: casual.sentences((n = 30)),
//         userId: users[1],
//         answerId: answer,
//         parentId: c1,
//         createdAt: new Date(timeObject.getTime() + 300000)
//       })

//       c4 = Comments.insert({
//         content: casual.sentences((n = 30)),
//         userId: users[2],
//         answerId: answer,
//         parentId: c1,
//         createdAt: new Date(timeObject.getTime() + 400000)
//       })
//       comments.push(c2, c3, c4)
//     }
//     console.log('Adding test data Comments:  ')
//     comments.forEach(c => console.log(c))
//   })
// }

// if (Likes.find().fetch().length < 1) {
//   answers.forEach((answer, i) => {
//     let likes = []
//     let timeObject = new Date()

//     let l1 = Likes.insert({
//       content: casual.sentences((n = 30)),
//       userId: users[1],
//       answerId: answer,
//       createdAt: timeObject
//     })

//     likes.push(l1)

//     if (i < 5) {
//       l2 = Likes.insert({
//         userId: users[1],
//         answerId: answer,
//         createdAt: new Date(timeObject.getTime() + 200000)
//       })
//       l3 = Likes.insert({
//         userId: users[2],
//         answerId: answer,
//         createdAt: new Date(timeObject.getTime() + 300000)
//       })

//       l4 = Likes.insert({
//         userId: users[3],
//         answerId: answer,
//         createdAt: new Date(timeObject.getTime() + 400000)
//       })
//       likes.push(l2, l3, l4)
//     }
//     console.log('Adding test data Likes:  ')
//     likes.forEach(c => console.log(c))
//   })
// }
