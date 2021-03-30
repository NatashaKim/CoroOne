import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import '../../assets/stylesheets/M_post_preview_combo.scss'

const TYPES = [
  'visibile',
  'unvisibile',
];

class M_post_preview_combo extends React.Component {

  render () {
    let checkComboType = TYPES.includes(this.props.comboType)
    ? this.props.comboType : TYPES[0]
    let postNumber = 0;
    if (this.props.posts.length < 1) {
      checkComboType = "unvisibile";
    } else {
      checkComboType = TYPES.includes(this.props.comboType)
      ? this.props.comboType : TYPES[0];
    }
    return (
      <div className = {`Post_preview_combo ${checkComboType}`}>
      {this.props.posts.map(post => (
        <A_post_title key = {post.id} post = {post} post_number = {postNumber = postNumber + 1} headingStyle = 'p4' headingAlign = 'left_align'/>
      ))}
      </div>
    );
  }
}

export default M_post_preview_combo
