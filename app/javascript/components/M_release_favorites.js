import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_title from "./A_title"
import A_genre from "./A_genre"
import '../../assets/stylesheets/M_post_preview.scss'
import '../../assets/stylesheets/colors.scss'


class M_release_favorites extends React.Component {

  render () {

    let releaseGenres = this.props.post.genres.filter(c => c.name !== "Анонс" && c.name !== "Релиз" && c.name !== "Обновление" && c.name !== "О компаниях"  && c.name !== "Совет" && c.name !== "Чит-код" && c.name !== "Факт");

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/project_cover_preview_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }

    var sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };


    return (
      <div style={sectionStyle} className = 'Post_preview_default'>
        <div className = "Preview_default_wrapper">
          <div className = "Date_wrapper">
            {this.props.post.release_date}
          </div>

          <div className = "Date_wrapper">
            {this.props.post.release_date}
          </div>

          <A_title
           headingColor = 'zelda-green'
           headingAlign = 'left_align'
           headingStyle = 'h4'
           title = {this.props.post.game_name}
          />

           <div className = "Genres">
            {releaseGenres.map(genre => (
                <A_genre
                genreType = 'image'
                genre = {genre}
                />
             ))}
            </div>

        </div>
      </div>
    );
  }
}

export default M_release_favorites
