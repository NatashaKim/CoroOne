import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
import {get_posts_by_type} from './Api.js'
import M_video_preview from "./M_video_preview"


const posts_in_part = 3;
const top_slice = 2;

class O_reviews_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(4, this.props.post_number).then((u)=>{
        this.setState({posts: u})
      })
}



render_post_with_video (post) {
  return (
    <M_video_preview key = {post.id} post = {post} category = {post.category}  />
  );
}

render_post_without_video (post) {
  return (
    <M_post_preview category = {post.category} postStyle = 'ps--horizontal_long' post = {post}  />
  );
}


  render () {

    if (!this.state.posts) {return ""}

    let parts = [];

    let post_with_video = [];
    let post_without_video = [];


    for (var i = 0; i < this.state.posts.length; i++) {
      let a = this.state.posts[i];
      if (a.videourl) {post_with_video.push(a);
      } else {
        post_without_video.push(a);
      }
    }


    if (this.props.remove_post) {
      for(let i = post_without_video.length-1; i >=0; i--){
        if(this.props.remove_post.includes(post_without_video[i].id)) post_without_video.splice(i,1);
      }
    } else {
      post_without_video = post_without_video.slice(0, post_without_video.length - 4);
    }



    let idx_with_video = 0;
    let idx_without_video = 0;
    while (idx_with_video <=post_with_video.length-2 || idx_without_video <= post_without_video.length-1) {
      if(idx_with_video <=post_with_video.length-2){
        parts.push(this.render_post_with_video(post_with_video[idx_with_video++]));
        parts.push(this.render_post_with_video(post_with_video[idx_with_video++]));
      }

      if (idx_without_video <= post_without_video.length-1) {
        parts.push(this.render_post_without_video(post_without_video[idx_without_video++]));
      }
    }

    if (idx_with_video <=post_with_video.length-1) {
      parts.push(this.render_post_with_video(post_with_video[idx_with_video++]));
    }




    return (
      <div className = "Reviews_grid">
        {parts}
      </div>
    );
  }
}

export default O_reviews_preview
