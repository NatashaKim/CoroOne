import React from "react"
import PropTypes from "prop-types"
class A_avatar extends React.Component {
  render () {
    return (
      <img className="Avatar"
        src={this.props.user.image.small_thumb.url}
        alt={this.props.user.name}
      />
    );
  }
}

export default A_avatar
