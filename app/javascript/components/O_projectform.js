import React from "react"
import axios from 'axios'
import PropTypes from "prop-types"
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import A_textarea from "./A_textarea"
import M_input_with_label from "./M_input_with_label"
import M_image_input_with_label from "./M_image_input_with_label"
import M_textarea_with_label from "./M_textarea_with_label"
import A_input from "./A_input"
import A_label from "./A_label"
import A_button from "./A_button"
import A_checkbox from "./A_checkbox"
import M_multiselect_genres from "./M_multiselect_genres"
import M_multiselect_project_checklist from "./M_multiselect_project_checklist"
import '../../assets/stylesheets/O_projectform.scss'


let formatDate = project_start_date => {
  var d = new Date(project_start_date),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;

  return [year, month].join("-");
};

class O_projectform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.project.name ? props.project.name : '',
        description: props.project.description ? props.project.description : '',
        genre_id: props.project.genre_id ? props.project.genre_id : '',

        year: null, month: null,
        year_death: null, month_death: null,
        project_start_date: null,
        project_end_date: null,

        project_cover: props.project.project_cover.url ? props.project.project_cover.url : '',
        download_project: props.project.download_project ? props.project.download_project : '',
        donate_project: props.project.donate_project ? props.project.donate_project : ''
}
    ;
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleProjectCoverChange = this.handleProjectCoverChange.bind(this);
      this.handleDownloadProjectChange = this.handleDownloadProjectChange.bind(this);
      this.handleDonateProjectChange = this.handleDonateProjectChange.bind(this);
    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleProjectCoverChange(e) {
      this.setState({ project_cover: e.target.value });
    }
    handleDownloadProjectChange(e) {
      this.setState({ download_project: e.target.value });
    }
    handleDonateProjectChange(e) {
      this.setState({ donate_project: e.target.value });
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
              name="project[project_start_date]"
              value={this.state.project_start_date}
            />

            <input
              type="hidden"
              name="project[project_end_date]"
              value={this.state.project_end_date}
            />

           <M_multiselect_genres
             genres = {this.props.genres}
             active_genres = {this.props.active_genres}
           />

           <M_multiselect_project_checklist
             project = {this.props.project}
           />

           <M_input_with_label
             label = "Название"
             inputPlace = "new_post"
             name="project[name]"
             value={this.state.name}
             onChange={this.handleNameChange}
           />

           <M_textarea_with_label
             label = "Концепция"
             name="project[description]"
             value={this.state.description}
             onChange={this.handlDescriptionChange}
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

            <M_image_input_with_label
              label = "Обложка"
              name="project[project_cover]"
              onChange={this.handleProjectCoverChange}
              limitation = "Не менее 1440px Х 800px"
            />

            <M_input_with_label
              label = "Ссылка для скачивания игры (необязательно)"
              inputPlace = "new_post"
              name="project[download_project]"
              value={this.state.download_project}
              onChange={this.handleDownloadProjectChange}
            />

            <M_input_with_label
              label = "Ссылка для донатов (необязательно)"
              inputPlace = "new_post"
              name="project[donate_project]"
              value={this.state.donate_project}
              onChange={this.handleDonateProjectChange}
            />

          </div>

          <A_button
            value = "Опубликовать проект"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

        </div>
      );
    }
  }

export default O_projectform
