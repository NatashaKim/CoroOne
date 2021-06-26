import React from "react"
import PropTypes from "prop-types"
import O_article from "./O_article"
import M_hashtags from "./M_hashtags"
import A_postcover from "./A_postcover"
import A_posttype_marker from "./A_posttype_marker"
import O_puzzle_preview from "./O_puzzle_preview"
import O_comment from "./O_comment"
import M_commentform from "./M_commentform"
import A_title from "./A_title"

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

    let comment_section = '';
    if (this.props.current_user_id == -1) {
      comment_section = <div>Пожалуйста, <a href="/users/sign_up">зарегистрируйтесь</a> или <a href="/users/sign_in">войдите</a>, чтобы оставить коментарий</div>;
    } else {
      comment_section =
      <M_commentform
        post_id = {this.props.post_id}
        user = {this.props.user}
      />;}

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

        <div className="Social_icons_holder_article">
          <div className="Shape">

          </div>
        </div>


        <div className="Article_puzzle_heading">
          <A_title
            headingColor = 'navy-blue'
            headingStyle = "h3"
            title = "Похожие статьи"
          />
        </div>
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
        {comment_section}
      </div>
    );
  }
}

export default T_article
