import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Home from '../routes/Home'
import Posts from '../routes/Posts'
import Post from '../routes/Post'
import PostCreate from '../routes/PostCreate'
import PostEdit from '../routes/PostEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <Home msgAlert={this.msgAlert} user={user} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact user={user} path='/posts' render={() => (
            <Posts msgAlert={this.msgAlert} type='all' user={user} />
          )} />
          <Route exact user={user} path='/needs' render={() => (
            <Posts msgAlert={this.msgAlert} type='need' user={user} />
          )} />
          <Route exact user={user} path='/offers' render={() => (
            <Posts msgAlert={this.msgAlert} type='offer' user={user} />
          )} />
          <Route exact user={user} path='/networks' render={() => (
            <Posts msgAlert={this.msgAlert} type='network' user={user} />
          )} />
          <Route exact user={user} path='/actions' render={() => (
            <Posts msgAlert={this.msgAlert} type='action' user={user} />
          )} />
          <Route exact user={user} path='/misc' render={() => (
            <Posts msgAlert={this.msgAlert} type='misc' user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/create-post' render={() => (
            <PostCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact user={user} path='/posts/:id' render={({ match }) => (
            <Post match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/posts/:id/edit' render={({ match }) => (
            <PostEdit match={match} msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
