import React from "react"

import axios from 'axios';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_textarea from "./A_textarea"
import A_input from "./A_input"
import A_button from "./A_button"
import {availableCategories} from './Api.js';

let formatDate = project_start_date => {
  var d = new Date(project_start_date),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;

  return [year, month].join("-");
};

class O_necrologyform2 extends React.Component {
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
        <div className = "postform">
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
           <YearPicker
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

            <label>Дата смерти проекта</label>
            <YearPicker
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

export default O_necrologyform2
