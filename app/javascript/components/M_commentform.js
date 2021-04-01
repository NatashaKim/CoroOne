import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_button from "./A_button"
import A_input from "./A_input"
import A_textarea from "./A_textarea"
import '../../assets/stylesheets/M_commentform.scss'

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
          <A_textarea
            type="text"
            name="comment[body]"
            placeholder="Напишите комментарий"
            value={this.state.content}
            onChange={this.handleContentChange}
            textareaType="textarea--small"
          />


        </div>
        <A_button
          value = "Опубликовать комментарий"
          type = "submit"
          buttonSize = "btn--small"
          buttonColor = "btn--blue"
        />

      </div>
      </form>
    );
  }
}

export default M_commentform
