import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import A_textarea from "./A_textarea"
import M_input_with_label from "./M_input_with_label"
import M_image_input_with_label from "./M_image_input_with_label"
import M_textarea_with_label from "./M_textarea_with_label"
import M_select_with_label from "./M_select_with_label"
import A_button from "./A_button"
import M_checkbox from "./M_checkbox"
import A_label from "./A_label"
import M_multiselect_genres from "./M_multiselect_genres"
import {availableCategories} from './Api.js';
import '../../assets/stylesheets/O_postform.scss'


class O_newsform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        genre_id: props.post.genre_id ? props.post.genre_id : '',
        title: props.post.title ? props.post.title : '',
        author: props.post.author ? props.post.author : '',
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        game_name: props.post.game_name ? props.post.game_name : '',
        day: null, month: null,
        release_date: props.post.release_date ? props.post.release_date : '',
        post_type_id: props.post.post_type_id ? props.post.post_type_id : ''
}
    ;
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
    handleVideourlChange(e) {
      this.setState({ videourl: e.target.value });
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
              name="post[release_date]"
              value={this.state.release_date}
            />

            <M_multiselect_genres
              genres = {this.props.genres}
              active_genres = {this.props.active_genres}
            />

            <M_input_with_label
              label = "Заголовок"
              inputPlace = "new_post"
              name="post[title]"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />

            <M_input_with_label
              label = "Автор"
              inputPlace = "new_post"
              name="post[author]"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />

            <M_textarea_with_label
              label = "Текст публикации"
              name="post[content]"
              value={this.state.content}
            />

            <M_input_with_label
              label = "Название игры"
              inputPlace = "new_post"
              name="post[game_name]"
              value={this.state.game_name}
            />



             <div className="Date_wrapper">
               <div className="Date">
               <A_label
               label = "Дата релиза"/>
               <DayPicker
                  className = "Date_style"
                  defaultValue={'день'}
                  value={this.state.day}
                  onChange={(day) => {
                    this.setState({ day });
                    this.setState({
                      release_date: new Date(day,this.state.month)
                    });
                  }}
                  id={'day'}
                  name={'day'}
                  classes={'classes year'}
                  optionClasses={'option classes'}
                />

                <MonthPicker
                  className = "Date_style"
                  defaultValue={'месяц'}
                  month={this.state.month}
                  value={this.state.month}
                  onChange={(month) => {
                    this.setState({ month });
                    this.setState({
                      release_date: new Date(this.state.day,month)
                    });
                  }}
                  id={'month'}
                  name={'month'}
                  classes={'classes month'}
                  optionClasses={'option classes'}
                />



               </div>
             </div>

            <M_image_input_with_label
              label = "Обложка"
              name="post[image]"
              onChange={this.handleImageChange}
              limitation = "Не менее 1440px Х 800px"
            />

            <A_textarea
              textareaType = "textarea--hidden"
              type="hidden"
              name="post[post_type_id]"
              value={this.state.post_type_id}
            />

          </div>

          <A_button
            value = "Опубликовать пост"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

        </div>
      );
    }
  }

export default O_newsform
