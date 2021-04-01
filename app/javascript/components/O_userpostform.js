import React from "react"

import axios from 'axios';
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_textarea from "./A_textarea"
import A_input from "./A_input"
import A_button from "./A_button"
import {availableCategories} from './Api.js';
import '../../assets/stylesheets/O_postform.scss'

class O_postform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        post_type_id: props.post.post_type_id ? props.post.post_type_id : '',
        author: props.author ? props.author : '',

}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);

    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleAuthorChange(e) {
      this.setState({ author: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
    handleImageChange(e) {
      this.setState({ image: e.target.value });
    }


    render() {
      return (
        <div className = "postform">
          <input
            type="hidden"
            name="authenticity_token"
            value={this.state.authenticity_token}
          />

          <label>Текст статьи</label>
          <A_textarea
            textareaType = "textarea--small"
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />


          <label>Картинка</label>
          <input
            type="file"
            name="post[image]"
            onChange={this.handleImageChange}
          />

          <A_textarea
            textareaType="textarea--hidden"
            type="hidden"
            name="post[post_type_id]"
            value={this.state.post_type_id}
            // onChange={this.handleTitleChange}
          />


          <A_button
            type = "Создать пост"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

        </div>
      );
    }
  }

export default O_postform
