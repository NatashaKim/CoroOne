import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_user_hashtag.scss'

const KINDS = [
  'h--hashtag',
  'h--htag',
]

class A_user_hashtag extends React.Component {

    render() {

      let tagKinds = " "

      let checktagKinds = KINDS.includes(this.props.tagKinds)
      ? this.props.tagKinds : KINDS[0]

      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec(this.props.post.content)) != null){
        myArray.push(tag[0]);
      }
      return (
        <div className = {`h ${checktagKinds}`} >
        {
          myArray.map(mytag => (<a href = {"/posts/hashtag/" + mytag.replace(/\#/g, '')}>{mytag}</a>))
        }
        </div>
      );
    }
  }

export default A_user_hashtag
