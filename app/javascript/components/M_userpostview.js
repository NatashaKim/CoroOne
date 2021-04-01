import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_hashtag from "./A_hashtag"
class M_userpostview extends React.Component {
  render() {

    let myRe = new RegExp("#\\w+", "g");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec("#abc, #haefg #hij")) != null){
      myArray.push(tag[0]);
    }

    return (
      <div>
            <A_hashtag post = {this.props.post} tagKinds = "h--hashtag"/>
            <p>ID: {`${this.props.post.id}`}</p>
            <p>Autdhor: {`${this.props.post.author.username}`}</p>
            <p>Content: {`${this.props.post.content}`}</p>
      </div>
    );
  }
}

export default M_userpostview
