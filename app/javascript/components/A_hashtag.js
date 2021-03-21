import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_hashtag.scss'



class A_hashtag extends React.Component {

    render() {
      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec(this.props.post.content)) != null){
        myArray.push(tag[0]);
      }
      return (
        <div  >
        {
          myArray.map(mytag => (<a href = {"/posts/hashtag/" + mytag.replace(/\#/g, '')}>{mytag}</a>))
        }
        </div>
      );
    }
  }

export default A_hashtag
