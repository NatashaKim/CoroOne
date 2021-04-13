import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_type.scss'


const STYLES = [
  'image',
  'menu'
];


class A_post_type extends React.Component {
  render () {
    const checkPostTypeStyle = STYLES.includes(this.props.postTypeStyle)
    ? this.props.postTypeStyle : STYLES[0]

    let imgsrc = '';

    if (checkPostTypeStyle == STYLES[0]) {
      if (this.props.post_type.id == 1) {
        imgsrc = '/assets/title_news.svg';
      } else if (this.props.post_type.id == 2){
        imgsrc = '/assets/title_articles.svg';
      } else if (this.props.post_type.id == 3) {
         imgsrc = '/assets/title_reviews.svg';
      } else if(this.props.post_type.id == 4) {
        imgsrc = '/assets/title_portfolio.svg';
      } else if (this.props.post_type.id == 5){
        imgsrc = '/assets/title_necrology.svg';
      } else  {
        imgsrc = '';
      }
    }  else {
      imgsrc = '';
    }

    let textpart = ""

    if (checkPostTypeStyle == STYLES[0]) {
      textpart = ""
    } else {
      textpart = <span>
       {`${this.props.post_type.name}`}
      </span>
    }

    return (
    <div className = "Post_types_img_wrapper">
       <a href={`/posts/by_type/${this.props.post_type.name}`} >
          <img
            className = "Post_types_img"
            src = {imgsrc}
          />
          {textpart}
       </a>
     </div>
    );
  }
}




export default A_post_type
