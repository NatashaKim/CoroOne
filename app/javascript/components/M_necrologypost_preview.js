import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import A_text from "./A_text"
import M_user_info from "./M_user_info"
import A_dates_of_life from "./A_dates_of_life"
import '../../assets/stylesheets/M_necrologypost_preview.scss'
import {getuser} from './Api.js';


class M_necrologypost_preview extends React.Component {
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
    if (!this.props.post.image.thumb.url) {
      imgsrc = '/assets/grave_project_placeholder.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }


    return (
      <div className = {`Post_preview`}>
            <img className = "Necro_img"
              src = {imgsrc}
            />
            <A_post_title
             post = {this.props.post}
             headingStyle = 'h6'
             headingColor = 'navy-blue'
             headingAlign = 'center_align'/>
           <A_dates_of_life post = {this.props.post}/>
           <A_category
           category = {this.props.post.category}
           categoryTypes = "image"/>
           <div>Любимый ребенок пользователя
           <M_user_info user={this.state.author} infoType = 'without_avatar' />
           </div>
            <A_button
               value = "F"
               buttonSize = "btn--small"
               buttonColor = "btn--green"/>

      </div>
    );
  }
}

export default M_necrologypost_preview
