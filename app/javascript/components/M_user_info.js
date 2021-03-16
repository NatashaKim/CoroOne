import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_debug from "./A_debug"
class M_user_info extends React.Component {
  render () {
    if (!this.props.user) {return "Нет юзера"}

    if (!this.props.user.image) {
      return <A_debug aObject = {this.props.user}/>
    }

    return (
      <div>
      <div className="UserInfo">
        <A_avatar avatarSizes = "small_thumb" user = {this.props.user}/>
        <A_avatar avatarSizes = "medium_thumb" user = {this.props.user}/>
        <A_avatar avatarSizes = "large_thumb" user = {this.props.user}/>
        <div className="UserInfo-name">
          {this.props.user.username}
        </div>
      </div>
      </div>
    );
  }
}

export default M_user_info
