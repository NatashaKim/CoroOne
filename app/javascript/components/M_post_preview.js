import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
class M_post_preview extends React.Component {
  render () {
    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    var sectionStyle = {
      width: "326px",
      height: "488px",
      borderRadius: "32px",
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };
    return (
      <div style={sectionStyle}>
        <A_category category = {this.props.post.category}/>
        <A_post_title
         post = {this.props.post}/>
      </div>
    );
  }
}

export default M_post_preview
