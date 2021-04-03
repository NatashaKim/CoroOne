import React from "react"
import PropTypes from "prop-types"
import A_title from "./A_title"
import A_link from "./A_link"
import A_avatar from "./A_avatar"
import A_username from "./A_username"
import '../../assets/stylesheets/M_necro_add.scss'

class M_necro_feedback extends React.Component {
  render () {

    return (
      <div className = "Necro_feedback">
        <div className = "Offer">
          <A_title headingStyle = "h6" headingColor = "mineral-gray" title = "Свяжитесь с автором"/>
          <p className = "Necro_small_text" >Знаете как можно оживить проект? Предложите автору свою помощь, — и в мире станет на одну прекрасную игру больше.</p>
        </div>
        <div className = "Contact">
          <A_avatar user = {this.props.user} avatarSizes = "medium_thumb"/>
          <div>
            <A_username user = {this.props.user} usernameStyle = "small4"/>
            <p className = "Necro_small_text">{this.props.post.feedback}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default M_necro_feedback
