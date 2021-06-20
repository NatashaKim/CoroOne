import React from "react"
import PropTypes from "prop-types"
import A_account_cover from "./A_account_cover"
import M_account from "./M_account"
import S_userposts_preview from "./S_userposts_preview"
import O_projects_preview from "./O_projects_preview"

class T_account extends React.Component {
  render () {
    return (
      <div className = "Account_page">
        <A_account_cover user = {this.props.user}/>
        <M_account
          action = {this.props.action}
          user = {this.props.user}
          current_user_id = {this.props.current_user_id}
        />
        <div class="Account_posts_container">
          <O_projects_preview
            user = {this.props.user}
            genres = {this.props.genres}
            projectPlace = 'account'
          />
          <div class="Account_posts">
            <S_userposts_preview
              post_type_id = {this.props.post_type_id}
              current_user_id = {this.props.current_user_id}
              user = {this.props.user}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default T_account
