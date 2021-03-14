import React from "react"
import PropTypes from "prop-types"
import M_user_info from "./M_user_info"
import M_commentform from "./M_commentform"
import A_debug from "./A_debug"
import {getuser} from './Api.js';
class O_comment extends React.Component {
  render () {

    let childComments = this.props.comments.filter(c => c.parent_id ==this.props.comment.id);

    return (
      <div className="Comment">
      <M_user_info user={this.props.author} />
        <div className="Comment-text">
          {this.props.comment.body}
        </div>
        <M_commentform
          user={this.props.currentUser}
          parent_id={this.props.comment.id}
          post_id={this.props.post.id}
        />
      <div>
      childComments length = {childComments.length}
      {childComments.map(c =>
        <div>
        <O_comment
        comment={c}
        author={getuser(c.user_id)}
        post={this.props.post}
        comments={this.props.comments}
        currentUser={this.props.currentUser}/>
        </div>
      ) }
      </div>
      </div>
    );
  }
}

export default O_comment
