import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_hashtag from "./A_hashtag"
import M_user_info from "./M_user_info"
import A_postcover from "./A_postcover"
import A_post_title from "./A_post_title"
import A_username from "./A_username"
import A_text from "./A_text"
import M_necro_feedback from "./M_necro_feedback"
import A_posttype_marker from "./A_posttype_marker"
import A_dates_of_life from "./A_dates_of_life"
import '../../assets/stylesheets/M_postview.scss'
import {getuser} from './Api.js';

class M_necrology_view extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        author: null
      };

      getuser(this.props.post.user_id).then((u)=>{
        this.setState({author: u})
      });
  }
  render() {
    let categoryTag='';



    let myRe = new RegExp("#\\w+", "g");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec("#abc, #haefg #hij")) != null){
      myArray.push(tag[0]);
    }

    return (
      <div className="Necrology_view">
        <div className = "Necrology_header">

          <div className = "Necro_user_inside">
            <span className = "h6 mineral-gray">Любимый ребенок пользователя </span>
            <A_username user={this.state.author} usernameStyle ='h6' usernameColor='mineral-gray'/>
          </div>

          <A_posttype_marker post_type = {this.props.post_type} />

        </div>

        <div className = "Necro_main_info">
         <A_postcover post = {this.props.post} coverPlace = "necrology"/>
         <A_post_title post = {this.props.post} headingStyle = "h4"/>
         <A_dates_of_life className = "Dates_inside" post = {this.props.post}/>
        </div>

        <A_text value = {this.props.post.content} textStyle = "p3" textColor = "cold-black" textAlign = "left_align"/>
        <A_hashtag post = {this.props.post} tagKinds = "h--hashtag"/>

        <M_necro_feedback post = {this.props.post} user={this.state.author}/>
      </div>
    );
  }
}

export default M_necrology_view
