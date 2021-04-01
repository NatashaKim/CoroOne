import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import {get_posts_by_type} from './Api.js'
import M_necrologypost_preview from "./M_necrologypost_preview"


class O_necrologyposts_preview extends React.Component {
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
          <M_necrologypost_preview
          key = {post.id}
          post = {post}/>
         ))}
      </div>
    );
  }
}

export default O_necrologyposts_preview
