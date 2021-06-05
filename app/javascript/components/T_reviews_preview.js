import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import M_genres_nav from "./M_genres_nav"
import O_reviews_preview from "./O_reviews_preview"


class T_reviews_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected_genres: []
      };

    }

    selectGenre(genre) {
      // Нам передали жанр. Возможно, что он уже был выбран.
      // Если да - найдем его индекс
      let genre_index = this.state.selected_genres.findIndex(
        (element, index, array) => {
          return element === genre.id
        }
      )

      let a = this.state.selected_genres;
      if (genre_index != -1) {
        // Жанр уже был выбран. Удаляем его из выбранных
        a.splice(genre_index,1);
        this.setState({
          selected_genres: a
        });
      } else {
        // Жанр не был выбран. Добавляем его выбранные
        a.push(genre.id)
        this.setState({
          selected_genres: a
        });
      }

      // this.setState({ value: e.target.value });
      // 1) Проверяем, не содержится ли жанр, который нам передали, в selected_genres
      // 2) Если содержится, удаляем из выбранных жанров
      // 3) Если не содержится, добавляем в выбранные жанры
      // 4) уведомляет страницу о необходимости перезагрузить страницу в соответствии с фильтром
    }

  render () {
    let genres = this.props.genres;
    return (
      <div className = "Reviews_page">
        <M_genres_nav
        genres = {this.props.genres}
        post_type_id = {this.props.post_type_id}
        reviews_preview = {this}
        />
        <div class="News">
          <O_reviews_preview
          post_type_id = {this.props.post_type_id}
          post_number = {this.props.post_number}
          genres = {this.state.selected_genres}
          />
        </div>
      </div>
    );
  }
}

export default T_reviews_preview
