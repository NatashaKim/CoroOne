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
        category_id: props.post.category_id ? props.post.category_id : '',
        title: props.post.title ? props.post.title : '',
        author: props.post.author ? props.post.author : '',
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        categories: props.categories ? props.categories : [],
        post_type_id: props.post.post_type_id ? props.post.post_type_id : '',

}
    ;
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);

    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleCategoryChange(e) {
      this.setState({ category_id: e.target.value });
    }
    handleTitleChange(e) {
      this.setState({ title: e.target.value });
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

            <A_select
             title={"Жанр"}
             name="post[category_id]"
             value={this.state.category}
             placeholder={"Select"}
             handleChange={this.handleCategoryChange}
             options={this.state.categories}
           />

          <label>Заголовок</label>
          <A_input
            inputTypes = "password"
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />

          <label>Автор</label>
          <A_input
            inputTypes = "default"
            type="text"
            name="post[author]"
            value={this.state.author}
            onChange={this.handleAuthorChange}
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
          />

          <A_button
            type = "Создать пост"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

          <input type="submit" value="Create post" />
        </div>
      );
    }
  }

export default O_postform
