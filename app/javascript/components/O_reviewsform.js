import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_textarea from "./A_textarea"
import M_input_with_label from "./M_input_with_label"
import M_image_input_with_label from "./M_image_input_with_label"
import M_textarea_with_label from "./M_textarea_with_label"
import M_select_with_label from "./M_select_with_label"
import A_button from "./A_button"
import M_checkbox from "./M_checkbox"
import {availableCategories} from './Api.js';
import '../../assets/stylesheets/O_postform.scss'

class O_reviewsform extends React.Component {
  constructor(props) {
      super(props);

let post_genres=[];

if (props.post_genres) {
  props.genres.map(genre => {
   post_genres["g_"+genre.id]=props.post_genres.findIndex((element, index, array) => {return element.genre_id == genre.id}) >=0;
  });
}



      this.state = {
        genre_id: props.post.genre_id ? props.post.genre_id : '',
        title: props.post.title ? props.post.title : '',
        author: props.post.author ? props.post.author : '',
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        videourl: props.post.videourl ? props.post.videourl : '',
        genres: props.genres ? props.genres : [],
        post_type_id: props.post.post_type_id ? props.post.post_type_id : '',
        post_genres: post_genres,
}
    ;
      this.handleGenreChange = this.handleGenreChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleVideourlChange = this.handleVideourlChange.bind(this);

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

    handleGenreChange(e) {
      let post_genres = this.state.post_genres;
      post_genres[e.target.id] = !post_genres[e.target.id];
      this.setState({post_genres: post_genres});
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

            <div>
            {this.state.genres.map(genre => {
            let id = "g_"+genre.id;
            let checked = {};

            if(this.state.post_genres[id]) checked= {checked:"on"};


              return (
              <div>
               <input  type="checkbox" id={ id } name ={ "genres[g_"+genre.id+"]" } {...checked}  onChange={this.handleGenreChange}/>
              <label for={ "g_"+genre.id }>{genre.name}</label>
              </div>
           )
         }
         )}
           </div>

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
              onChange={this.handleContentChange}
            />

            <M_input_with_label
              label = "Видео"
              inputPlace = "new_post"
              name="post[videourl]"
              value={this.state.videourl}
              onChange={this.handleVideourlChange}
            />

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

export default O_reviewsform
