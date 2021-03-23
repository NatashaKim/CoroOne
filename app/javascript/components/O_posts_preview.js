import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
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
    let postNumber = 0;
    let size = 5;

    return (
      <div>
        <A_post_type post_type_id = {this.props.post_type_id} />
        {this.state.posts.slice(0, size).map(post => (
          <M_post_preview key = {post.id} post = {post} category = {post.category} post_number = {postNumber = postNumber + 1} postStyle = "ps--horizontal_small" />
        ))}

      </div>
    );
  }
}

export default O_posts_preview
