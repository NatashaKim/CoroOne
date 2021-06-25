import React from "react"

import axios from 'axios';
import PropTypes from "prop-types"
import A_textarea from "./A_textarea"
import M_image_input_with_label from "./M_image_input_with_label"
import M_textarea_with_label from "./M_textarea_with_label"
import M_select_with_label from "./M_select_with_label"
import A_button from "./A_button"
import {availableCategories} from './Api.js';
import '../../assets/stylesheets/O_postform.scss'

class O_postform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        project_id: props.post.project_id ? props.post.project_id : '',
        projects: props.projects ? props.projects : [],
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        post_type_id: props.post.post_type_id ? props.post.post_type_id : '',
        author: props.author ? props.author : '',

}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleProjectChange = this.handleProjectChange.bind(this);

    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleAuthorChange(e) {
      this.setState({ author: e.target.value });
    }
    handleProjectChange(e) {
      this.setState({ project_id: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
    handleImageChange(e) {
      this.setState({ image: e.target.value });
    }


    render() {
      return (
        <div className = "Postform">
          <div className = "Postform_body">
            <input
              type="hidden"
              name="authenticity_token"
              value={this.state.authenticity_token}
            />

            <M_select_with_label
             label = "Проект"
             name="post[project_id]"
             value={this.state.project}
             placeholder={"Выбери проект"}
             handleChange={this.handleProjectChange}
             options={this.state.projects}
           />

            <M_textarea_with_label
              label = "Что нового?)"
              name="post[content]"
              value={this.state.content}
              onChange={this.handleContentChange}
            />

            <M_image_input_with_label
              label = "Добавить фотографию"
              name="post[image]"
              onChange={this.handleImageChange}
              limitation = "Не менее 1200px Х 400px"
            />

            <A_textarea
              textareaType="textarea--hidden"
              type="hidden"
              name="post[post_type_id]"
              value={this.state.post_type_id}
            />
          </div>


          <A_button
            value = "Создать пост"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

        </div>
      );
    }
  }

export default O_postform
