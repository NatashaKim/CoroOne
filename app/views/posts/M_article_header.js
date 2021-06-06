import React from "react"
import PropTypes from "prop-types"
import A_post_title from "./A_post_title"
import A_text from "./A_text"
import M_user_info from "./M_user_info"
import '../../assets/stylesheets/M_postview.scss'

class M_article_header extends React.Component {
  render() {
    return (
      <div className="Article_header">
        <A_post_title
         post = {this.props.post}
         headingColor = 'navy-blue'
         headingAlign = 'left_align'
         headingStyle = 'h3'
        />
        <A_text
          value={this.props.post.lid}
          textStyle='p1'
          textColor='cold-black'
          textAlign='left_align'
        />
        <M_user_info user={this.props.post.author}/>
      </div>
    );
  }
}

export default M_article_header
