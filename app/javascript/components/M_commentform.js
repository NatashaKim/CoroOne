import React from "react"
import PropTypes from "prop-types"
import A_avatar from "./A_avatar"
import A_button from "./A_button"
import A_input from "./A_input"
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
          <A_input
            type="text"
            inputPlace = "pub_comment"
            name="comment[body]"
            placeholder="Напишите комментарий"
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
        <A_button
          value = "Отправить"
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
