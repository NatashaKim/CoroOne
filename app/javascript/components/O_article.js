import React from "react"
import PropTypes from "prop-types"
import M_share_article from "./M_share_article"
import M_article_body from "./M_article_body"
import M_article_header from "./M_article_header"
import {getuser} from './Api.js';
import '../../assets/stylesheets/M_postview.scss'

class O_article extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          author: null,
        };

        getuser(this.props.post.user_id).then((u)=>{
          this.setState({author: u})
        });
  }
  render() {
    return (
      <div className="Article">
        <M_article_header
          post = {this.props.post}
          user={this.state.author}
        />
        <M_article_body
          post = {this.props.post}
        />
        <M_share_article
          post = {this.props.post}
          current_user_id={this.props.current_user_id}
        />
      </div>
    );
  }
}

export default O_article
