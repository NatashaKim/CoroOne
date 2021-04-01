import React from "react"
import PropTypes from "prop-types"
import M_user_info from "./M_user_info"
import M_commentform from "./M_commentform"
import A_debug from "./A_debug"
import {getuser} from './Api.js';

const TYPES = [
  'first_response',
  'inner_response'
];

class O_comment extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        author: null,
        commentLinkClicked: false
      };

      getuser(this.props.comment.user_id).then((u)=>{
        this.setState({author: u})
      });
      this.handleAddInput = this.handleAddInput.bind(this);

}

handleAddInput() {
  this.setState({
    commentLinkClicked: true
  })
}

  render () {

    let childComments = this.props.comments.filter(c => c.parent_id ==this.props.comment.id);

    return (
      <div className="Comment">

        <M_user_info user={this.state.author} />
        <div className="Comment-text">
          {this.props.comment.body}
        </div>
        {
          this.state.commentLinkClicked?

          <M_commentform
            user={this.props.currentUser}
            parent_id={this.props.comment.id}
            post_id={this.props.post.id}
          />

          :

          <div></div>
        }

        <button
          type="button"
          onClick={this.handleAddInput}
        >
          Ответить
        </button>



        <div>

          {childComments.map(c =>
            <div className = "comment_container">
            <O_comment
            comment={c}
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
