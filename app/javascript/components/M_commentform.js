import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
class M_commentform extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        content: props.comment.content ? props.comment.content : ''
}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);

    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

  render () {
    return (
      <div className="CommentForm">
        <A_avatar user={this.props.user} />
        <div className="CommentForm--textarea">
          <label>Content</label>
          <textarea
            type="text"
            name="comment[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </div>
        <input type="submit" value="Create comment" />
      </div>
    );
  }
}

export default M_commentform
