import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'

const Icon = {
  'insta': '/assets/icon_insta.svg',
  'twitter': '/assets/icon_twitter.svg',
  'vk': '/assets/icon_vk.svg',
  'youtube': '/assets/icon_youtube.svg',
  'facebook': '/assets/icon_facebook.svg',
  'telegram': '/assets/icon_telegram.svg'
}


class A_social_icon extends React.Component {
      render() {
        let share_href = "";
      return (
        <a className="Social_icon" href={share_href}>
          <img src= {Icon[this.props.Icon]}/>
        </a>
      );
    }
  }


export default A_social_icon
