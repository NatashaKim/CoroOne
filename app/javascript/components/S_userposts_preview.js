import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import {get_posts_by_type} from './Api.js'
import O_userpost_preview from "./O_userpost_preview"


class S_userposts_preview extends React.Component {
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
      <div className = "Userposts_grid" >
        {rest_posts.map(post => (
          <O_userpost_preview
          key = {post.id}
          post = {post}
          likes = {post.likes}
          current_user_id = {this.props.current_user_id}
          user = {this.props.user} />
         ))}
      </div>
    );
  }
}

export default S_userposts_preview
