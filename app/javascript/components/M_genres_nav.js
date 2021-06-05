import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import A_genre from "./A_genre"


class M_genres_nav extends React.Component {
  constructor(props) {
      super(props);

    }

    selectGenre(genre) {
      this.props.reviews_preview.selectGenre(genre);

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
