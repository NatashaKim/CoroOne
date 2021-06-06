import React from "react"
import PropTypes from "prop-types"
import A_text from "./A_text"
import A_postcover from "./A_postcover"

import '../../assets/stylesheets/M_postview.scss'

class M_article_body extends React.Component {
  render() {
    return (
      <div className="Article_body">
        <A_text value={this.props.post.content} />
        <div className="Article_body_image">
          <A_postcover post = {this.props.post} />
        </div>
        <A_text value={this.props.post.content} />
      </div>
    );
  }
}

export default M_article_body
