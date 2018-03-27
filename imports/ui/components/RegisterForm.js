import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

class RegisterForm extends Component {
  state = {
    errors: []
  }

  checkInputs() {
    let errors = []
    if (this.password.value !== this.passwordConfirm.value) {
      errors = [...errors, 'Password does not match']
    }

    if (this.firstName.value < 1) {
      errors = [...errors, 'First name is required']
    }

    if (this.lastName.value < 1) {
      errors = [...errors, 'Last name is required']
    }

    if (this.email.value < 1) {
      errors = [...errors, 'Email is required']
    }
    if (this.username.value < 1) {
      errors = [...errors, 'username is required']
    }
    if (errors.length > 0) {
      this.setState({
        errors
      })
      return false
    }

    this.setState({
      error: []
    })
    return true
  }

  registerUser = e => {
    e.preventDefault()

    if (!this.checkInputs()) {
      return false
    }

    Accounts.createUser(
      {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        profile: {
          firstName: this.firstName.value,
          lastName: this.lastName.value
        }
      },
      error => {
        if (!error) {
          this.props.history.push('/')
        } else {
          console.log(error)
        }
      }
    )
  }
  render() {
    return (
      <form onSubmit={this.registerUser}>
        {this.state.errors.length > 0 && (
          <div>
            {this.state.errors.map((error, i) => <p key={i}>{error}</p>)}
          </div>
        )}
        <label>First Name</label>
        <input type="text" ref={input => (this.firstName = input)} />
        <label>Last Name</label>
        <input type="text" ref={input => (this.lastName = input)} />
        <label>Email</label>
        <input type="email" ref={input => (this.email = input)} />
        <label>Enter Password</label>
        <input type="password" ref={input => (this.password = input)} />
        <label>Confirm Password</label>
        <input type="password" ref={input => (this.passwordConfirm = input)} />
        <button type="submit">Register User</button>
      </form>
    )
  }
}

export default withRouter(RegisterForm)
