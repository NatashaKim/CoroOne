import React from "react"
import PropTypes from "prop-types"
import A_like_button from "./A_like_button"
import A_favorite_button from "./A_favorite_button"


class M_actions_userpost extends React.Component {
  render () {
    return (
      <div className='Actions_userpost'>
        <A_like_button
           post = {this.props.post}
           likes = {this.props.likes}
           current_user_id = {this.props.current_user_id}/>
       <A_favorite_button
          post = {this.props.post}
          favorites = {this.props.favorites}
          current_user_id = {this.props.current_user_id}/>
      </div>
    );
  }
}

export default M_actions_userpost
