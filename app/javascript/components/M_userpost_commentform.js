import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_button from "./A_button"
import A_input from "./A_input"
import '../../assets/stylesheets/M_commentform.scss'

class M_userpost_commentform extends React.Component {

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
        <div className="Userpost_commentform">
          <A_avatar user={this.props.user} />
          <A_input
            type="text"
            inputPlace = "workshop_comment"
            name="comment[body]"
            placeholder="Напишите комментарий"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </div>
      </form>
    );
  }
}

export default M_userpost_commentform
