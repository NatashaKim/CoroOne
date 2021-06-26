import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_navbar_icon from "./A_navbar_icon.js"

class M_navbar extends React.Component {
      render() {
        let first_link = '';
        let second_link = '';
        if (this.props.current_user_id == -1) {
          first_link = <a href="/users/sign_up">Зарегистрироваться</a>, second_link = <a href="/users/sign_in">Войти</a>;
        } else {
          first_link = <a rel="nofollow" data-method="delete" href="/users/sign_out">Выйти</a>, second_link = <a href={`/users/${this.props.current_user_id}`}>Аккаунт</a>;}
      return (
        <div className="Navbar">
        <a className="logos" href={'/posts'}>
          <img src = '/assets/icon_logo.svg'/>
        </a>
        <div className="Navbar_menu">
          <A_navbar_icon
            iconTypes = "search"
          />
          <A_navbar_icon
            iconTypes = "notification"
          />
          <A_navbar_icon
            iconTypes = "bookmarks"
            current_user = {this.props.current_user}
          />
          <div className="Acclist">
            <A_navbar_icon
              current_user = {this.props.current_user}
              iconTypes = "profile"
            />
            <div className="Account_action">
             <div className="Sign">
                {first_link}
             </div>
             <div className="Sign">
              {second_link}
             </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }


export default M_navbar
