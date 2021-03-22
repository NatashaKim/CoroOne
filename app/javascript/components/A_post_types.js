import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_types.scss'





class A_post_types extends React.Component {
  render () {
    let imgsrc = '';

    if (this.props.post_type.name = 'article') {
      imgsrc = '/assets/title_articles.svg';
    } else if(this.props.post_type.name = 'necrology') {
      imgsrc = '/assets/title_necrology.svg';
    } else if (this.props.post_type.name = 'new') {
       imgsrc = '/assets/title_news.svg';
    } else if (this.props.post_type.name = 'review'){
      imgsrc = '/assets/title_reviews.svg';
    } else  {
      imgsrc = '/assets/title_portfolio.svg';
    }

    return (

            <div >

                <img
                  className = "post_types_img"
                  src = {imgsrc}
                />

            </div>
    );
  }
}




export default A_post_types
