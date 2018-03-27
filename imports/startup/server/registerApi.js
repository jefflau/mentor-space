import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import UserSchema from '../../api/users/User.graphql'

import userResolvers from '../../api/users/resolvers'

import merge from 'lodash/merge'

////

const typeDefs = [UserSchema]

const resolvers = merge(userResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
})
