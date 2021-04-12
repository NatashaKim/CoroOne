import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
import {get_posts_by_type} from './Api.js'

class O_puzzle_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(1, this.props.post_number).then((u)=>{
        this.setState({posts: u})
      })
}


  render () {

    let postNumber = 0;

    if (!this.state.posts) {return ""}

    let rest_posts = this.state.posts;

    if (this.props.remove_post) {

      for(let i = rest_posts.length-1; i >=0; i--){
        if(this.props.remove_post.includes(rest_posts[i].id)) rest_posts.splice(i,1);
      }
      } else {
        rest_posts = rest_posts.slice(0, rest_posts.length - 4);
      }

    return (
      <div className = "Puzzle_preview">
        <div className = "Puzzle_grid">
          {rest_posts.map(post => (
            <M_post_preview key = {post.id} post = {post} category = {post.category} post_number = {postNumber = postNumber + 1} postStyle = 'ps--horizontal' post_type_id = {this.props.post_type_id}  />
          ))}
        </div>
      </div>
    );
  }
}

export default O_puzzle_preview
