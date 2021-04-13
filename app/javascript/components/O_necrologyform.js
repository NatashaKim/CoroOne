import React from "react"

import axios from 'axios';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_textarea from "./A_textarea"
import A_input from "./A_input"
import A_label from "./A_label"
import A_button from "./A_button"
import {availableCategories} from './Api.js';

let formatDate = project_start_date => {
  var d = new Date(project_start_date),
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
        year: null, month: null,
        year_death: null, month_death: null,
        project_start_date: null,
        project_end_date: null,
        categories: props.categories ? props.categories : [],
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        post_type_id: props.post.post_type_id ? props.post.post_type_id : '',
        feedback: props.post.feedback ? props.post.feedback : ''

}
    ;
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
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
        <div className = "Postform">
        <div className = "Postform_body">
          <input
            type="hidden"
            name="authenticity_token"
            value={this.state.authenticity_token}
          />

          <input
            type="hidden"
            name="post[project_start_date]"
            value={this.state.project_start_date}
          />

          <input
            type="hidden"
            name="post[project_end_date]"
            value={this.state.project_end_date}
          />

          <A_label
          label = "Название игры"/>
          <A_input
            inputPlace = "new_post"
            inputTypes = "default"
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />

            <A_label
            label = "Жанр  игры"/>
            <A_select

             name="post[category_id]"
             value={this.state.category}
             placeholder={"Select"}
             handleChange={this.handleCategoryChange}
             options={this.state.categories}
           />

           <A_label
           label = "Дата рождения проекта"/>
           <YearPicker
              className = "Date_style"
              defaultValue={'select year'}
              value={this.state.year}
              onChange={(year) => {
                this.setState({ year });
                this.setState({
                  project_start_date: new Date(year,this.state.month)
                });
              }}
              id={'year'}
              name={'year'}
              classes={'classes'}
              optionClasses={'option classes'}
            />

            <MonthPicker
              className = "Date_style"
              defaultValue={'select month'}
              month={this.state.month}
              value={this.state.month}
              onChange={(month) => {
                this.setState({ month });
                this.setState({
                  project_start_date: new Date(this.state.year,month)
                });
              }}
              id={'month'}
              name={'month'}
              classes={'classes'}
              optionClasses={'option classes'}
            />

            <A_label
            label = "Дата смерти проекта"/>
            <YearPicker
               className = "Date_style"
               defaultValue={'select year'}
               value={this.state.year_death}
               onChange={(year_death) => {
                 this.setState({ year_death });
                 this.setState({
                   project_end_date: new Date(year_death,this.state.month_death)
                 });
               }}
               id={'year_death'}
               name={'year_death'}
               classes={'classes_death'}
               optionClasses={'option classes death'}
             />

             <MonthPicker
               className = "Date_style"
               defaultValue={'select month'}
               month_death={this.state.month_death}
               value={this.state.month_death}
               onChange={(month_death) => {
                 this.setState({ month_death });
                 this.setState({
                   project_end_date: new Date(this.state.year_death,month_death)
                 });
               }}
               id={'month_death'}
               name={'month_death'}
               classes={'classes_death'}
               optionClasses={'option classes death'}
             />



          <A_label
          label = "Концепция"/>
          <A_textarea
            textareaType = "textarea--small"
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />


          <A_label
          label = "Обложка проекта"/>
          <input
            className = "File_input"
            type="file"
            name="post[image]"
            onChange={this.handleImageChange}
          />


          <A_label
          label = "Обратная связь (необязательно)"/>
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

export default O_necrologyform
