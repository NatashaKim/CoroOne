import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import A_genre from "./A_genre"


class M_genres_nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected_genres: []
      };

    }

    selectGenre(genre) {
      let genre_index = this.state.selected_genres.findIndex(
        (element, index, array) => {
          return element === genre.id
        }
      )

      let a = this.state.selected_genres;
      if (genre_index != -1) {
        a.splice(genre_index,1);
        this.setState({
          selected_genres: a
        });
      } else {
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
      <div className = "Genres_nav">
        <div className = "Genres_container">
         <div className = "Genres_list">
          {genres.map(genre => (
              <A_genre
              genreType = 'text_with_image'
              genreColor = 'mineral-gray'
              genreStyle = 'h6'
              genre = {genre}
              genre_nav = {this}
              />
           ))}
          </div>
        </div>
      </div>
    );
  }
}

export default M_genres_nav
