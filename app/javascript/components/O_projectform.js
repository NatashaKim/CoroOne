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

import {availableCategories} from './Api.js';

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

      let project_genres=[];

      if (props.project_genres) {
        props.genres.map(genre => {
         project_genres["g_"+genre.id]=props.project_genres.findIndex((element, index, array) => {return element.genre_id == genre.id}) >=0;
        });
      }


      this.state = {
        name: props.project.name ? props.project.name : '',
        description: props.project.description ? props.project.description : '',
        genre_id: props.project.genre_id ? props.project.genre_id : '',
        genres: props.genres ? props.genres : [],

        year: null, month: null,
        year_death: null, month_death: null,
        project_start_date: null,
        project_end_date: null,

        project_cover: props.project.project_cover.url ? props.project.project_cover.url : '',
        download_project: props.project.download_project ? props.project.download_project : '',
        donate_project: props.project.donate_project ? props.project.donate_project : '',
        project_genres: project_genres,

        idea_or_concept: props.project.idea_or_concept ? props.project.idea_or_concept : false,
        plot_and_characters: props.project.plot_and_characters ? props.project.plot_and_characters : false,
        game_mechanics: props.project.game_mechanics ? props.project.game_mechanics : false,
        hero_voices: props.project.hero_voices ? props.project.hero_voices : false,
        background_music: props.project.background_music ? props.project.background_music : false,
        effects: props.project.effects ? props.project.effects : false,
        engine: props.project.engine ? props.project.engine : false,
        game_ai: props.project.game_ai ? props.project.game_ai : false,
        three_d_and_animation: props.project.three_d_and_animation ? props.project.three_d_and_animation : false,
        characters: props.project.characters ? props.project.characters : false,
        levels_and_worlds: props.project.levels_and_worlds ? props.project.levels_and_worlds : false,
        objects: props.project.objects ? props.project.objects : false
}
    ;
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleGenreChange = this.handleGenreChange.bind(this);
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

    handleGenreChange(e) {
      let project_genres = this.state.project_genres;
      project_genres[e.target.id] = !project_genres[e.target.id];
      this.setState({project_genres: project_genres});
    }


    render() {

      let checked = {};
      if(this.state.idea_or_concept == true) checked= {checked:"on"};

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


              <div>
                <A_checkbox
                  label = "Идея или концепт"
                  name ={ "project[idea_or_concept]" }
                  checked = {this.state.idea_or_concept}
                />

                <A_checkbox
                  label = "Сюжет и персонажи"
                  name ={ "project[plot_and_characters]" }
                  checked = {this.state.plot_and_characters}
                />

                <A_checkbox
                  label = "Игровые механики"
                  name ={ "project[game_mechanics]" }
                  checked = {this.state.game_mechanics}
                />

                <A_checkbox
                  label = "Голоса героев"
                  name ={ "project[hero_voices]" }
                  checked = {this.state.hero_voices}
                />

                <A_checkbox
                  label = "Фоновая музыка"
                  name ={ "project[background_music]" }
                  checked = {this.state.background_music}
                />

                <A_checkbox
                  label = "Эффекты"
                  name ={ "project[effects]" }
                  checked = {this.state.effects}
                />

                <A_checkbox
                  label = "Движок"
                  name ={ "project[engine]" }
                  checked = {this.state.engine}
                />

                <A_checkbox
                  label = "Игровой ИИ"
                  name ={ "project[game_ai]" }
                  checked = {this.state.game_ai}
                />

                <A_checkbox
                  label = "3D и анимация"
                  name ={ "project[three_d_and_animation]" }
                  checked = {this.state.three_d_and_animation}
                />

                <A_checkbox
                  label = "Персонажи"
                  name ={ "project[characters]" }
                  checked = {this.state.characters}
                />

                <A_checkbox
                  label = "Уровни и миры"
                  name ={ "project[levels_and_worlds]" }
                  checked = {this.state.levels_and_worlds}
                />

                <A_checkbox
                  label = "Объекты"
                  name ={ "project[objects]" }
                  checked = {this.state.objects}
                />
              </div>


              <div>
              {this.state.genres.map(genre => {
                let id = "g_"+genre.id;
                let checked = {};

                if(this.state.project_genres[id]) checked= {checked:"on"};


                  return (
                  <div>
                   <input type="checkbox" id={ id } name ={ "genres[g_"+genre.id+"]" } {...checked}  onChange={this.handleGenreChange}/>
                  <label for={ "g_"+genre.id }>{genre.name}</label>
                  </div>
               )
             }
           )}
           </div>

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
