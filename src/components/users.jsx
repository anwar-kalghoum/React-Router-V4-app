import React from 'react'
class Users extends React.Component {
  render() {
    console.log(this.props.match)
    return <h1>Users {this.props.match.params.id}</h1>
  }
}
export default Users