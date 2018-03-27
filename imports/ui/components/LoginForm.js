import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'

class LoginForm extends Component {
  login = e => {
    e.preventDefault()
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      console.log(!error)
      if (!error) {
        console.log('here')
        console.log(client)
        this.props.client.resetStore()
      }
      console.log(error)
    })
  }
  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default withApollo(LoginForm)
