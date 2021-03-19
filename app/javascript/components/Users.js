import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
          {this.props.users.map(user => (
            <div key={user.id}>
            <p><strong>ID:</strong>{`${user.id}`}</p>
            <p><strong>Email:</strong>{`${user.email}`}</p>
            <p><strong>Is Admin:</strong>{`${user.admin}`}</p>
            <p><strong>Is Admin:</strong>{`${user.username}`}</p>
            </div>
          ))}
        </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users;
