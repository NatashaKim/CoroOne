import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import '../../assets/stylesheets/M_post_preview.scss'


const STYLES = [
  'ps--vertical',
  'ps--horizontal',
  'ps--screen',
  'ps--horizontal_long',
  'ps--horizontal_long_puzzle',
  'ps--horizontal_puzzle'
]


class M_post_preview extends React.Component {

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

    if (this.props.post_type_id == 1  && this.props.post_number == 1) {
      checkpostStyle = 'ps--vertical'
    } else if (this.props.post_type_id == 1  && this.props.post_number == 2) {
      checkpostStyle = 'ps--vertical'
    } else if (this.props.post_type_id == 1  && this.props.post_number == 3) {
      checkpostStyle = 'ps--vertical'
    } else if (this.props.post_type_id == 5  && this.props.post_number == 1) {
      checkpostStyle = 'ps--horizontal_long'
    } else {
      checkpostStyle = STYLES.includes(this.props.postStyle)
      ? this.props.postStyle : STYLES[0]
    }



    return (
      <div style={sectionStyle} className = {`Post_preview ${checkpostStyle}`}>
        <div className = "Preview_wrapper">
          <div className = "Post_info">
            <A_category
            category = {this.props.post.category}
            categoryStyles = {categoryStyle}
            categoryColors = "zelda-green"/>
            <A_post_title
             post = {this.props.post}
             headingColor = 'ice-white'
             headingAlign = 'center_align'
             headingStyle = {headingStyle}/>
           </div>
            <A_button
               value = "Читать"
               buttonSize = "btn--small"
               buttonColor = "btn--green">
            </A_button>
        </div>
      </div>
    );
  }
}

export default M_post_preview
