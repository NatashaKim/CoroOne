import React from "react"

import axios from 'axios';
import DropdownDate from "react-dropdown-date";
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_textarea from "./A_textarea"
import A_input from "./A_input"
import A_button from "./A_button"
import {availableCategories} from './Api.js';
import '../../assets/stylesheets/O_postform.scss'

const formatDate = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;

  return [year, month].join("-");
};

class O_necrologyform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: props.post.title ? props.post.title : '',
        category_id: props.post.category_id ? props.post.category_id : '',

        project_start_date: props.post.project_start_date ? props.post.project_start_date : '',

        project_end_date: props.post.project_end_date ? props.post.project_end_date : '',

        years: props.years ? props.years : [],
        months: props.years ? props.years : [],
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        feedback: props.post.feedback ? props.post.feedback : '',
        date: null, selectedDate: "2012-11"

}
    ;
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleStartDateChange = this.handleStartDateChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleFeedbackChange = this.handleFeedbackChange.bind(this);

    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }
    handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
    handleCategoryChange(e) {
      this.setState({ category_id: e.target.value });
    }
    handleStartDateChange(e) {
      this.setState({ project_start_date: e.target.value });
    }
    handleEndDateChange(e) {
      this.setState({ project_start_date: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
    handleImageChange(e) {
      this.setState({ image: e.target.value });
    }
    handleFeedbackChange(e) {
      this.setState({ feedback: e.target.value });
    }


    render() {
      return (
        <div className = "postform">
          <input
            type="hidden"
            name="authenticity_token"
            value={this.state.authenticity_token}
          />

          <label>Название игры</label>
          <A_input
            inputTypes = "default"
            type="text"
            name="post[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label>Жанр игры</label>
            <A_select
             title={"Жанр  игры"}
             name="post[category_id]"
             value={this.state.category}
             placeholder={"Select"}
             handleChange={this.handleCategoryChange}
             options={this.state.categories}
           />

           <label>Дата рождения проекта</label>
           <DropdownDate
             onDateChange={date => {
               this.setState({ date: date, selectedDate: formatDate(date) });
             }}
             defaultValues={
               {
                 year: "select year",
                 month: "select month",
               }
             }
           />

          <label>Дата смерти проекта</label>
          <DropdownDate
            onDateChange={date => {
              this.setState({ date: date, selectedDate: formatDate(date) });
            }}
            defaultValues={
              {
                year: "select year",
                month: "select month",
              }
            }
          />

          <label>Концепция</label>
          <A_textarea
            textareaType = "textarea--small"
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />


          <label>Обложка проекта</label>
          <input
            type="file"
            name="post[image]"
            onChange={this.handleImageChange}
          />

          <label>Обратная связь (необязательно)</label>
          <A_textarea
            textareaType = "textarea--small"
            type="text"
            name="post[feedback]"
            value={this.state.feedback}
            onChange={this.handleFeedbackChange}
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

export default O_necrologyform
