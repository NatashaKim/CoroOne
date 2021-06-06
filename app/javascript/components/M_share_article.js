import React from "react"
import PropTypes from "prop-types"
import A_social_icon from "./A_social_icon"
import A_favorite_button from "./A_favorite_button"
import A_title from "./A_title"
import '../../assets/stylesheets/M_postview.scss'

class M_share_article extends React.Component {
  render() {
    return (
      <div className="Share_article">
        <A_title
         headingStyle='h6'
         headingColor='mineral-gray'
         headingAlign='left_align'
         title='Поделитесь с друзьями и сохраните себе, чтобы не потерять)'/>
        <div className="Share_ways">
          <div className="Share_social">
            <A_social_icon Icon='twitter'/>
            <A_social_icon Icon='vk'/>
            <A_social_icon Icon='facebook'/>
            <A_social_icon Icon='telegram'/>
          </div>
          <A_favorite_button
            post={this.props.post}
            favorites={this.props.post.favorites}
            current_user_id={this.props.current_user_id}
          />
        </div>
      </div>
    );
  }
}

export default M_share_article
