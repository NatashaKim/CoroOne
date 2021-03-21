import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_title from "./A_title"
class M_post_preview extends React.Component {
  render () {
    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }
    return (
      <div>
      <A_category category = {this.props.post.category}/>
      <A_title title = {this.props.post.title} />
      <img
        src = {imgsrc}
      />
      </div>
    );
  }
}

export default M_post_preview
