import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_navbar_icon from "./A_navbar_icon.js"

class M_navbar extends React.Component {
      render() {
      return (
        <div className="Navbar">
        <a href={'/posts'}>
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
          />
          <div className="Acclist">
            <A_navbar_icon
              current_user = {this.props.current_user}
              iconTypes = "profile"
            />
            <div className="Account_action">
             <div className="Sign">
              <a>
                Войти
              </a>
             </div>
             <div className="Sign">
              <a>
                Зарегистрироваться
              </a>
             </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }


export default M_navbar
