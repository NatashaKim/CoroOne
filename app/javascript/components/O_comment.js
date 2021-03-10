import React from "react"
import PropTypes from "prop-types"
import M_user_info from "./M_user_info"
class O_comment extends React.Component {
  render () {
    return (
      <div className="Comment">
        <M_user_info user={this.props.author} />
        <div className="Comment-text">
          {this.props.comment.body}
        </div>

      </div>
    );
  }
}

export default O_comment
