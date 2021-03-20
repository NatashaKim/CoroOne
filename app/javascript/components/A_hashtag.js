import React from "react"
import PropTypes from "prop-types"

class A_hashtag extends React.Component {
    render() {
      return (
        <span>{this.props.post.tags}</span>
      );
    }
  }

export default A_hashtag
