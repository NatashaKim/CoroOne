import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'h6',
  'small4'
]

const COLORS = [
  'mineral-gray',
  'cold-black',
  'navy-blue'
]

class A_username extends React.Component {
  render () {
    if (!this.props.user) {return "Нет юзера"}

    const checkUsernameStyle = STYLES.includes(this.props.usernameStyle)
    ? this.props.usernameStyle : STYLES[0]

    const checkUsernameColor = COLORS.includes(this.props.usernameColor)
    ? this.props.usernameColor : COLORS[0]

    return (
      <span className={`Username ${checkUsernameStyle} ${checkUsernameColor}`}>
        {this.props.user.username}
      </span>
    );
  }
}

export default A_username
