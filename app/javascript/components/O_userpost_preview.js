import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import {get_posts_by_type} from './Api.js'
import M_userpost_preview from "./M_userpost_preview"


class O_userpost_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(this.props.post_type_id, this.props.post_number).then((u)=>{
        this.setState({posts: u})
      })
    }
  render () {
    if (!this.state.posts) {return ""}
    let rest_posts = this.state.posts;
    return (
      <div>
        {rest_posts.map(post => (
          <M_userpost_preview
          key = {post.id}
          post = {post}
          likes = {post.likes}
          current_user_id = {this.props.current_user_id} />
         ))}
      </div>
    );
  }
}

export default O_userpost_preview
