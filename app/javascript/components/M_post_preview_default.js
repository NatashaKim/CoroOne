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


    let headingStyle = '';
    if (this.props.postStyle == 'ps--screen') {
      headingStyle = 'h4';
    } else if (this.props.postStyle == 'ps--horizontal_long') {
      headingStyle = 'h4';
    } else {
      headingStyle = 'h6';
    }

    let categoryStyle = '';
    if (this.props.postStyle == 'ps--screen') {
      categoryStyle = 'small1';
    } else if (this.props.postStyle == 'ps--horizontal_long') {
          categoryStyle = 'small1';
    } else {
      categoryStyle = 'small2';
    }

    let postStyle = " ";

    let checkpostStyle = STYLES.includes(this.props.postStyle)
    ? this.props.postStyle : STYLES[0]

    return (
      <div style={sectionStyle} className = {`Post_preview ${checkpostStyle}`}>
        <div className = "Preview_wrapper">
            <A_post_title
             post = {this.props.post}
             headingColor = 'cold-black'
             headingAlign = 'left_align'
             headingStyle = 'h6'/>
            <M_hashtags_search
               post = {this.props.post}
               hashtagPlace = 'search_results'
            />
            <A_favorite_button
               post = {this.props.post}
               favorites = {this.props.favorites}
               current_user_id = {this.props.current_user_id}
            />

            <div className = {`Postcover_container ${checkCoverPlace}`}>
              <img className = {`Postcover`}
                src = {imgsrc}
              />
            </div>

        </div>
      </div>
    );
  }
}

export default M_post_preview_default
