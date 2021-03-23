import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import '../../assets/stylesheets/M_post_preview.scss'


const STYLES = [
  'ps--vertical',
  'ps--horizontal_small',
  'ps--screen',
  'ps--screen_narrow',
  'ps--horizontal_medium',
  'ps--horizontal_big'
]


class M_post_preview extends React.Component {

  render () {
    let postStyle = " ";

    let imgsrc = '';

    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    const checkpostStyle = STYLES.includes(this.props.postStyle)
    ? this.props.postStyle : STYLES[0]

    var sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };

    return (
      <div style={sectionStyle} className = {`post_preview ${checkpostStyle}`}>
        <div>
            <A_category category = {this.props.post.category}/>
            <A_post_title
             post = {this.props.post}/>
            <div className = "button_div">
              <A_button
                 type = "Читать"
                 buttonSize = "btn--small"
                 buttonColor = "btn--green">
              </A_button>
            </div>
        </div>
      </div>
    );
  }
}

export default M_post_preview
