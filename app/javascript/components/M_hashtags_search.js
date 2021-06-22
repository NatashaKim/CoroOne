import React from "react"
import PropTypes from "prop-types"
import A_hashtag from "./A_hashtag"
import '../../assets/stylesheets/M_hashtags.scss'

const PLACES = [
  'popular',
  'search_results'
];

class M_hashtags_search extends React.Component {

  render () {
    let myRe = new RegExp("#\[\\wа-я]+", "ig");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec(this.props.post.content)) != null){
      myArray.push(tag[0]);
    }

    if (!myArray) {return ""}

    const checkHashtagsPlace = PLACES.includes(this.props.hashtagsPlace)
    ? this.props.hashtagsPlace : PLACES[0]

    return (
      <div className = {`Hashtags_search ${checkHashtagsPlace}`}>
        {myArray.slice(0, 15).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          hashtagPlace = {this.props.hashtagPlace}
          />
        ))}
      </div>
    );
  }
}

export default M_hashtags_search
