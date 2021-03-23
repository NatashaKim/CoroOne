import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import '../../assets/stylesheets/M_post_preview_combo.scss'

class M_post_preview_combo extends React.Component {

  render () {
    return (
      <div className = {`post_preview_combo`}>
      {this.props.posts.map(post => (
        <A_post_title key = {post.id} post = {post} />
      ))}
      </div>
    );
  }
}

export default M_post_preview_combo
