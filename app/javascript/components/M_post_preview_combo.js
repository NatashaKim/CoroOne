import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import '../../assets/stylesheets/M_post_preview_combo.scss'

class M_post_preview_combo extends React.Component {

  render () {
    let postStyle = " ";

    const checkpostStyle = STYLES.includes(this.props.postStyle)
    ? this.props.postStyle : STYLES[0]

    return (
      <div className = {`post_preview_combo ${checkpostStyle}`}>
        <div>
            <A_post_title post = {this.props.post}/>
        </div>
      </div>
    );
  }
}

export default M_post_preview_combo
