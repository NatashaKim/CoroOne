import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import {get_posts_by_type} from './Api.js';
class O_posts_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(this.props.post_type_id, 10).then((u)=>{
        this.setState({posts: u})
      })

}
  render () {
    if (!this.state.posts) {return ""}

    return (
      <div>
      {this.state.posts.map(post => (
        <M_post_preview key = {post.id} post = {post} category = {post.category} />
      ))}
      </div>
    );
  }
}

export default O_posts_preview
