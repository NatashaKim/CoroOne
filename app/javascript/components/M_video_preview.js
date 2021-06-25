import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import A_video from "./A_video"

class M_video_preview extends React.Component {

  render () {

    let videourl = '';
    if (!this.props.post.videourl) {
      videourl = '';
    } else {
      videourl = this.props.post.videourl;
    }

    return (
      <div className = {`Video_preview`}>
        <A_video videourl = {videourl}/>
        <div className = "Preview_wrapper">
          <div className = "Post_info">
            <A_category
            category = {this.props.post.category}
            categoryStyles = 'small2'
            categoryColors = "zelda-green"/>
            <A_post_title
             post = {this.props.post}
             headingColor = 'navy-blue'
             headingAlign = 'center_align'
             headingStyle = 'h6'/>
           </div>
        </div>
      </div>
    );
  }
}

export default M_video_preview
