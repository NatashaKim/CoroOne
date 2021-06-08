import React from "react"
import PropTypes from "prop-types"
import O_article from "./O_article"
import M_hashtags from "./M_hashtags"
import '../../assets/stylesheets/M_postview.scss'

class T_article extends React.Component {
  render() {
    return (
      <div className="Article_page">
        <O_article
          post = {this.props.post}
          current_user_id={this.props.current_user_id}
        />
        <M_hashtags
          post = {this.props.post}
        />
      </div>
    );
  }
}

export default T_article
