import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import M_hashtags_search from "./M_hashtags_search"
import A_favorite_button from "./A_favorite_button"
import '../../assets/stylesheets/M_post_preview.scss'
import '../../assets/stylesheets/colors.scss'


class M_post_preview_default extends React.Component {

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/project_cover_preview_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    var sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };


    return (
      <div className = 'Post_preview_default'>
        <div className = "Preview_default_wrapper">
          <A_post_title
           post = {this.props.post}
           headingColor = 'cold-black'
           headingAlign = 'left_align'
           headingStyle = 'h6'/>
           <div className = 'Hashtags_favorite'>
              <M_hashtags_search
                 post = {this.props.post}
                 hashtagPlace = 'search_results'
                 hashtagsPlace = 'search_results'
              />
              <A_favorite_button
                 post = {this.props.post}
                 favorites = {this.props.favorites}
                 current_user_id = {this.props.current_user_id}
              />
            </div>
          </div>

          <div style={sectionStyle} className = 'Postcover_container'>

          </div>
      </div>
    );
  }
}

export default M_post_preview_default
