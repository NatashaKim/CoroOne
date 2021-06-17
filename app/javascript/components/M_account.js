import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_username from "./A_username"
import A_button from "./A_button"
import A_title from "./A_title"
import A_followers_followees from "./A_followers_followees"
import M_social_icons from "./M_social_icons"
import A_text from "./A_text"
import '../../assets/stylesheets/M_user_info.scss'

const TYPES = [
  'for_post',
  'for_project',
  'for_avatar',
]

class M_account extends React.Component {
  render () {
    if (!this.props.user) {return "Нет юзера"}
    if (!this.props.current_user_id) {return "Войдите в аккаунт"}


    let user_role = "";
    if (this.props.user.admin == true) {
      user_role = "Администратор"
    } else if (this.props.user.ismoderator == true) {
      user_role = "Модератор"
    } else if (this.props.user.isdeveloper == true) {
      user_role = "Разработчик"
    } else {
      user_role = "Геймер"
    }

    let link = "";
    let button_label = '';

    if (this.props.action == 'Редактировать') {
      link = "/users/edit"
      button_label = "Редактировать"
    } else if (this.props.action == 'Переназначить') {
      link = `/users/${this.props.user.id}/edit`
      button_label = "Переназначить"
    } else if (this.props.action == 'Отписаться') {
      button_label = "Отписаться"
    } else if (this.props.action == 'Подписаться') {
      button_label = "Подписаться"
    } else {
      button_label = "Подписаться"
    }

    let place_holder = ""
    if (this.props.user.description) {
      place_holder = <div className="Place_holder">
                       <div className="Prize">
                         <img src="/assets/icon_prize.svg"/>
                         <span className='p4 mineral-gray'>Лучшая концепция</span>
                       </div>
                       <div className='p4 mineral-gray'>Разработчик на Unreal Engine, Unity, Python</div>
                    </div>
    }

    return (
      <div className="Account_container">
        <img className="Account_holder" src="/assets/account_upper_holder.svg"/>
        <div className="Account">
          <A_avatar avatarSizes = "large_thumb" user = {this.props.user}/>
          <div className="Account_info">
            <A_username usernameStyle = "h6" usernameColor = "navy-blue" user = {this.props.user}/>
            <A_title
            headingStyle = 'p4'
            headingColor = 'mineral-gray'
            title = {user_role}
            />
            <A_followers_followees user = {this.props.user}/>
            <a href={link}>
              <A_button
              buttonColor = 'btn--blue'
              buttonSize = 'btn--small'
              value = {button_label}
              />
            </a>
              {place_holder}
              <A_text
                value = {this.props.user.description}
                textStyle = "p4"
                textColor = "mineral-gray"
              />

            <M_social_icons/>
          </div>
        </div>
        <img className="Account_holder" src="/assets/account_lower_holder.svg"/>
      </div>
    );
  }
}

export default M_account
