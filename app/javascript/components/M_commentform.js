import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
class M_commentform extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        content: ''
}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);

    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

    componentDidMount(e) {
        this.setState({
          token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

  render () {
    return (
      <form
      id={'child-comment-'+this.props.parent_id}
      action={'/posts/'+this.props.post_id+'/comments' + "?authenticity_token="+encodeURIComponent(this.state.token)}
      method='post'
      >
      <div className="CommentForm">
        <A_avatar user={this.props.user} />
        <div className="CommentForm--textarea">
          <label>Content</label>
          <textarea
            type="text"
            name="comment[body]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />

          <input
            type="hidden"
            name="comment[parent_id]"
            value={this.props.parent_id}
          />
          <input
            type="hidden"
            name="comment[post_id]"
            value={this.props.post_id}
          />

        </div>
        <input type="submit" value="Create comment" />
      </div>
      </form>
    );
  }
}

export default M_commentform
