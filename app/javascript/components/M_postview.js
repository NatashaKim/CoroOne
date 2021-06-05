import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_hashtag from "./A_hashtag"
import M_user_info from "./M_user_info"
import A_postcover from "./A_postcover"
import A_posttype_marker from "./A_posttype_marker"
import '../../assets/stylesheets/M_postview.scss'

class M_postview extends React.Component {
  render() {
    let categoryTag='';



    let myRe = new RegExp("#\\w+", "g");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec("#abc, #haefg #hij")) != null){
      myArray.push(tag[0]);
    }

    return (
      <div className="m-postview">
        <A_postcover post = {this.props.post}/>
        <A_posttype_marker post_type = {this.props.post_type} />
        <div className="Post_body">
          <A_hashtag post = {this.props.post} tagKinds = "h--hashtag"/>
          <p>{`${this.props.post.author}`}</p>
          <M_user_info user={this.props.post.author} />
          <p className="content">{`${this.props.post.content}`}</p>
        </div>
      </div>
    );
  }
}

export default M_postview
