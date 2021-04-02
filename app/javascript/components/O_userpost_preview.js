import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_text from "./A_text"
import A_like_button from "./A_like_button"
import A_favorite_button from "./A_favorite_button"
import M_actions_userpost from "./M_actions_userpost"
import M_userpost_commentform from "./M_userpost_commentform"
import M_user_info from "./M_user_info"
import O_comment from "./O_comment"
import '../../assets/stylesheets/M_post_preview.scss'
import {getuser} from './Api.js';


class O_userpost_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        author: null
      };

      getuser(this.props.post.user_id).then((u)=>{
        this.setState({author: u})
      });
  }

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }


    return (
      <div className = {`Userpost_preview`}>
        <M_user_info user={this.state.author} />
        <A_text
         value = {this.props.post.content}
         textStyle = 'p3'
         textColor = 'cold-black'
         textAlign = 'left_align'/>
         <div className = "Userpost_img" >
         <img className = "Userpost_img_cover"
           src = {imgsrc}
         />
         </div>
        <M_actions_userpost
           post = {this.props.post}
           likes = {this.props.likes}
           favorites = {this.props.favorites}
           current_user_id = {this.props.current_user_id}/>
        <M_userpost_commentform
         post_id = {this.props.post.id}
         user = {this.props.user}/>
      </div>
    );
  }
}

export default O_userpost_preview
