import React from "react"
import PropTypes from "prop-types"
import A_hashtag from "./A_hashtag"
import '../../assets/stylesheets/M_hashtags.scss'

const hashtags_in_part = 15;
const top_slice = 4;

class M_hashtags extends React.Component {


render_part(some_hashtags){
  return (
    <div className = "Hashtags_gray">
      <div className = "Hashtags_gray_body">
        {some_hashtags.slice(0, 4).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          />
        ))}
        <img className = "Hashtag_img" src = '/assets/hashtags_img_1.svg'/>
        {some_hashtags.slice(4, 6).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          />
        ))}
        <img className = "Hashtag_img" src = '/assets/hashtags_img_2.svg'/>
        {some_hashtags.slice(6, 10).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          />
        ))}
        <img className = "Hashtag_img" src = '/assets/hashtags_img_3.svg'/>
        {some_hashtags.slice(10, 12).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          />
        ))}
        <img className = "Hashtag_img" src = '/assets/hashtags_img_4.svg'/>
        {some_hashtags.slice(12, hashtags_in_part).map(hashtag => (
          <A_hashtag
          hashtag = {hashtag}
          />
        ))}
      </div>
    </div>
  );
}

  render () {
    let myRe = new RegExp("#\[\\wа-я]+", "ig");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec(this.props.post.content)) != null){
      myArray.push(tag[0]);
    }


    if (!myArray) {return ""}

    let parts = [];
    let rest_hashtags = myArray;

    while(rest_hashtags.length > 0){
      let p = rest_hashtags.slice(0,hashtags_in_part);
       rest_hashtags = rest_hashtags.slice(hashtags_in_part);
       parts.push(this.render_part(p));
    }
    return (
      <div className = "News_preview">
        {parts}
      </div>
    );
  }
}

export default M_hashtags
