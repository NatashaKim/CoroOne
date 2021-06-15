import React from "react"
import PropTypes from "prop-types"
import A_social_icon from "./A_social_icon"

class M_social_icons extends React.Component {
      render() {
      return (
        <div className="Social_icons">
          <A_social_icon
            Icon = 'twitter'
          />
          <A_social_icon
            Icon = 'vk'
          />
          <A_social_icon
            Icon = 'facebook'
          />
          <A_social_icon
            Icon = 'telegram'
          />
        </div>
      );
    }
  }


export default M_social_icons
