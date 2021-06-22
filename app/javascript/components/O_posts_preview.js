import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
import {get_posts_by_type} from './Api.js'
import M_post_preview_default from "./M_post_preview_default"

class O_posts_preview extends React.Component {

  render () {
    return (
      <div>
        {this.props.posts.map(post => (
          <M_post_preview_default
            key = {post.id} 
            post = {post}
            favorites = {this.props.favorites}
            current_user_id = {this.props.current_user_id}
          />
        ))}
      </div>
    );
  }
}

export default O_posts_preview
