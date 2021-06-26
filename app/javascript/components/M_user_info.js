import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_username from "./A_username"
import A_debug from "./A_debug"
import '../../assets/stylesheets/M_user_info.scss'

const TYPES = [
  'for_post',
  'for_project',
  'for_avatar',
]

class M_user_info extends React.Component {
  render () {
    if (!this.props.user) {return ""}

    if (!this.props.user.image) {
      return <A_debug aObject = {this.props.user}/>
    }

    let checkInfoType = TYPES.includes(this.props.infoType)
    ? this.props.infoType : TYPES[0]

    let time = ''
    let usernameStyle = ''
    let usernameColor = ''

    if (checkInfoType == TYPES[0]) {
      time = '5 часов назад',
      usernameStyle = 'h6',
      usernameColor = 'cold-black'
    }

    return (
      <div>
      <div className={`UserInfo ${checkInfoType}`}>
        <A_avatar avatarSizes = "small_thumb" user = {this.props.user}/>
        <div className="UserInfo_text">
          <A_username usernameStyle = {usernameStyle} usernameColor = {usernameColor} user = {this.props.user}/>
          <span className="UserInfo_time p4 mineral-gray" >{time}</span>
        </div>
      </div>
      </div>
    );
  }
}

export default M_user_info
