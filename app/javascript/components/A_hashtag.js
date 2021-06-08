import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_hashtag.scss'

class A_hashtag extends React.Component {

    render() {
      return (
        <div className = "Article_hashtag" >
          <a href = {"/posts/hashtag/" + this.props.hashtag.replace(/\#/g, '')}>
            <div>
              <span className = "Hash">#</span>
              <span className = "Tag">{this.props.hashtag.replace(/\#/g, '')}</span>
            </div>
          </a>
        </div>
      );
    }
  }

export default A_hashtag
