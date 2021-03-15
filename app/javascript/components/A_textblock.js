import React from "react"
import PropTypes from "prop-types"
import A_post_title from './A_post_title.js'

class A_textblock extends React.Component {
  render () {
    return (
      <div>
      <p>
        A_textblock
      </p>
      <A_post_title title = {this.props.post.title}/>
      </div>
    );
  }
}

export default A_textblock
