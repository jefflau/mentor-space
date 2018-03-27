import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

import loadingIf from '../components/Loader'

const fontBreakOne = `@media (max-width: 1000px) {
  /* For everything smaller than 100px */
  font-size: 2rem;
}`
//Need to refactor css

const Main = props => {
  const { user, students } = props
  console.log(props)
  if (!user) {
    return <div>Please login</div>
  }
  return (
    <div>
      Hello {user.firstName} {user.lastName}
      <ul>
        {students.map(s => (
          <li>
            {s.firstName} {s.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

const userQuery = gql`
  query User {
    user {
      _id
      firstName
      lastName
    }
  }
`

const studentsQuery = gql`
  query Students {
    students {
      _id
      firstName
      lastName
    }
  }
`

const enhance = compose(
  graphql(userQuery, {
    props: ({ data }) => ({
      ...data
    })
  }),
  graphql(studentsQuery, {
    props: ({ data }) => ({
      ...data
    })
  }),
  loadingIf
)

export default enhance(Main)
