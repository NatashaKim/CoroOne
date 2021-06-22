import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_hashtag.scss'

const PLACES = [
  'article',
  'popular',
  'search_results'
];

class A_hashtag extends React.Component {
    render() {
      const checkHashtagPlace = PLACES.includes(this.props.hashtagPlace)
      ? this.props.hashtagPlace : PLACES[0]
      return (
        <div className = {`Hashtag ${checkHashtagPlace}`} >
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
