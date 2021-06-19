import React from "react"
import PropTypes from "prop-types"
import O_article from "./O_article"
import M_hashtags from "./M_hashtags"
import A_postcover from "./A_postcover"
import A_posttype_marker from "./A_posttype_marker"
import O_puzzle_preview from "./O_puzzle_preview"
import O_comment from "./O_comment"
import M_commentform from "./M_commentform"
import {getpost_type} from './Api.js';
import '../../assets/stylesheets/M_postview.scss'

class T_article extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          post_type: null
        };

        getpost_type(this.props.post.post_type_id).then((p)=>{
          this.setState({post_type: p})
        });
  }
  render() {
    return (
      <div className="Article_page">
        <div className="Article_image_header">
          <div className="Article_marker_holder">
            <A_posttype_marker
             post_type = {this.state.post_type}
            />
          </div>
          <A_postcover
            post = {this.props.post}
          />
        </div>
        <O_article
          post = {this.props.post}
          current_user_id={this.props.current_user_id}
        />
        <M_hashtags
          post = {this.props.post}
        />
        <O_puzzle_preview
          post_type_id = {this.props.post.post_type_id}
          post_number = "4"
          puzzlePlace = "article"
        />
        <O_comment
          comment = {this.props.comment}
          author = {this.props.author}
          post = {this.props.post}
          comments = {this.props.comments}
          currentUser = {this.props.currentUser}
        />
        <M_commentform
          post_id = {this.props.post_id}
          user = {this.props.user}
        />
      </div>
    );
  }
}

export default T_article
