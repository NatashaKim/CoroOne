import React from "react"
import PropTypes from "prop-types"
class A_avatar extends React.Component {
  render () {
    return (
      <div>
        <img className="Avatar"
          src={
            this.props.user ? this.props.user.image.small_thumb.url :  ''
          }
          alt={ this.props.user ? this.props.user.name: 'Oops!'}
        />
      </div>
    );
  }
}

export default A_avatar
