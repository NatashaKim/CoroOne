import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
import {get_posts_by_type} from './Api.js'
import M_post_preview_combo from "./M_post_preview_combo"
import '../../assets/stylesheets/O_articles_preview.scss'


const posts_in_part = 9;
const top_slice = 4;

class O_posts_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(5, this.props.post_number).then((u)=>{
        this.setState({posts: u})
      })
}


render_part(some_posts){
  let postNumber = 0;
  return (
    <div>
      <div className = "Articles_grid">
        {some_posts.slice(0, top_slice).map(post => (
          <M_post_preview key = {post.id} post = {post} category = {post.category} post_number = {postNumber = postNumber + 1} postStyle = 'ps--vertical' post_type_id = '5' />
        ))}
      </div>
      <M_post_preview_combo posts = {some_posts.slice(top_slice, posts_in_part)} />
  </div>
      );
}

  render () {

    if (!this.state.posts) {return ""}

    let parts = [];
    let rest_posts = this.state.posts;

    if (this.props.remove_post) {

      for(let i = rest_posts.length-1; i >=0; i--){
        if(this.props.remove_post.includes(rest_posts[i].id)) rest_posts.splice(i,1);
      }
    } else {
      rest_posts = rest_posts.slice(0, rest_posts.length - 4);
    }

    while(rest_posts.length > 0){
      let p = rest_posts.slice(0,posts_in_part);
       rest_posts= rest_posts.slice(posts_in_part);
       parts.push(this.render_part(p));
    }
    return (
      <div>
        {parts}
      </div>
    );
  }
}

export default O_posts_preview
