import React from "react"
import PropTypes from "prop-types"
import M_user_info from "./M_user_info"
import M_commentform from "./M_commentform"
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
{childComments.map(c => {
  return
  <O_comment
  comment={c}
  author={c.user}
  post={this.props.post}
  comments={this.props.comments}/>}
) }
</div>
      </div>
    );
  }
}

export default O_comment
