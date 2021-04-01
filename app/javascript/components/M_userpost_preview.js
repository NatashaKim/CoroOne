import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_title from "./A_title"
import A_like_button from "./A_like_button"
import M_commentform from "./M_commentform"
import '../../assets/stylesheets/M_post_preview.scss'


class M_userpost_preview extends React.Component {

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }


    return (
      <div >
            <A_title
             title = {this.props.post.content}/>
             <img className = "User_img"
               src = {imgsrc}
             />
             <M_commentform
              post_id = {this.props.post.id}
              user = {this.props.user}/>
              <A_like_button
                 post = {this.props.post}
                 likes = {this.props.likes}
                 current_user_id = {this.props.current_user_id}/>
      </div>
    );
  }
}

export default M_userpost_preview
