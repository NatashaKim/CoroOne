import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
class M_user_info extends React.Component {
  render () {
    return (
      <div className="UserInfo">
        <div className="UserInfo-name">
          {this.props.user.username}
        </div>
      </div>
    );
  }
}

export default M_user_info
