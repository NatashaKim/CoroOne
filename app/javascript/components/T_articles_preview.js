import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import M_genres_nav from "./M_genres_nav"
import O_articles_preview from "./O_articles_preview"
import O_puzzle_preview from "./O_puzzle_preview"

class T_articles_preview extends React.Component {
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

if(this.state.notification)this.state.notification(a);
    }

  render () {
    let genres = this.props.genres;
    return (
      <div className = "News_page">
        <div class="Post_type_header">
          <M_genres_nav
          genres = {this.props.genres}
          post_type_id = {this.props.post_type_id}
          reviews_preview = {this}
          />
          <O_puzzle_preview
          post_type_id = {this.props.post_type_id}
          post_number = "4"
          />
        </div>
        <div class="Post_type_section_wrapper">
          <O_articles_preview
          post_type_id = {this.props.post_type_id}
          post_number = {this.props.post_number}
          genres = {this.state.selected_genres}
          owner = {this}
          />
        </div>
      </div>
    );
  }
}

export default T_articles_preview
