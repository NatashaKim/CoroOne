import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_title from "./A_title"
import A_like_button from "./A_like_button"
import '../../assets/stylesheets/M_post_preview.scss'


class M_userpost_preview extends React.Component {

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    var sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };


    return (
      <div style={sectionStyle} >
        <div className = "Preview_wrapper">
          <div className = "Post_info">
            <A_title
             title = {this.props.post.content}/>
           </div>
            <A_like_button
               post = {this.props.post}
               likes = {this.props.likes}
               current_user_id = {this.props.current_user_id}/>
        </div>
      </div>
    );
  }
}

export default M_userpost_preview
