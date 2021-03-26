import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import '../../assets/stylesheets/M_spider.scss'


class M_spider extends React.Component {

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    var sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };

    return (
      <div>
        <div style = {sectionStyle} className = {`Spider`}>
          <div className = "Preview_wrapper">
            <div className = "Post_info">
              <A_category
              category = {this.props.post.category}
              categoryStyles = "small1"
              categoryColors = "zelda-green"/>
              <A_post_title
               post = {this.props.post}
               headingColor = 'ice-white'
               headingAlign = 'center_align'
               headingStyle = 'h4'/>
             </div>
              <A_button
                 type = "Читать"
                 buttonSize = "btn--small"
                 buttonColor = "btn--green">
              </A_button>
          </div>
        </div>
        <svg>
          <defs>
            <clipPath id="mask1" >
              <path id="curve" d="M137.6 0C213.594 0 275.2 61.6363 275.2 137.667C275.2 213.697 336.806 275.333 412.8 275.333C488.794 275.333 550.4 213.697 550.4 137.667C550.4 61.6363 612.006 0 688 0C763.994 0 825.6 61.6363 825.6 137.667C825.6 213.697 887.206 275.333 963.2 275.333C1039.19 275.333 1100.8 213.697 1100.8 137.667C1100.8 61.6363 1162.41 0 1238.4 0C1314.39 0 1376 61.6363 1376 137.667C1376 213.697 1314.39 275.333 1238.4 275.333C1162.41 275.333 1100.8 336.97 1100.8 413C1100.8 489.03 1162.41 550.667 1238.4 550.667C1314.39 550.667 1376 612.303 1376 688.333C1376 764.364 1314.39 826 1238.4 826C1162.41 826 1100.8 764.364 1100.8 688.333C1100.8 612.303 1039.19 550.667 963.2 550.667C887.206 550.667 825.6 612.303 825.6 688.333C825.6 764.364 763.994 826 688 826C612.006 826 550.4 764.364 550.4 688.333C550.4 612.303 488.794 550.667 412.8 550.667C336.806 550.667 275.2 612.303 275.2 688.333C275.2 764.364 213.594 826 137.6 826C61.6057 826 0 764.364 0 688.333C0 612.303 61.6057 550.667 137.6 550.667C213.594 550.667 275.2 489.03 275.2 413C275.2 336.97 213.594 275.333 137.6 275.333C61.6057 275.333 0 213.697 0 137.667C0 61.6363 61.6057 0 137.6 0Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
}

export default M_spider
