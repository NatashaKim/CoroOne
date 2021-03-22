import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_type.scss'





class A_post_type extends React.Component {
  render () {
    let imgsrc = '';

    if (this.props.post_type_id == 1) {
      imgsrc = '/assets/title_news.svg';
    } else if(this.props.post_type_id == 3) {
      imgsrc = '/assets/title_portfolio.svg';
    } else if (this.props.post_type_id == 4) {
       imgsrc = '/assets/title_reviews.svg';
    } else if (this.props.post_type_id == 5){
      imgsrc = '/assets/title_articles.svg';
    } else if (this.props.post_type_id == 8){
      imgsrc = '/assets/title_necrology.svg';
    } else  {
      imgsrc = '';
    }

    return (

            <div >

                <img
                  className = "Post_types_img"
                  src = {imgsrc}
                />

            </div>
    );
  }
}




export default A_post_type
