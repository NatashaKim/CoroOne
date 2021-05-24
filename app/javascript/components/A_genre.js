import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'

const STYLES = [
  'small2',
  'small1',
  'h6',
  'p4'
]

const TYPES = [
  'image',
  'text_with_image',
];

const COLORS = [
  'zelda-green',
  'mineral-gray',
  'ice-white'
]


class A_genre extends React.Component {
  render () {
    let genre = '';
    if (this.props.genre) {
      genre = this.props.genre.name
    }

    let checkGenreStyles = STYLES.includes(this.props.genreStyle)
    ? this.props.genreStyle : STYLES[0]

    let checkGenreColors = COLORS.includes(this.props.genreColor)
    ? this.props.genreColor : COLORS[0]

    let checkGenreTypes = TYPES.includes(this.props.genreType)
    ? this.props.genreType : TYPES[0]

    let imgsrc = '';
    if (this.props.genre == null) {
       imgsrc = '';
    } else if (checkGenreTypes == TYPES[0]) {
       imgsrc = this.props.genre.image_src, genre = '';
    } else {
      imgsrc = this.props.genre.image_src;
    }

    let textpart = <div>{genre}</div>
    let imgpart = <img className = "Genre_img" src = {imgsrc}/>

    return (
      <div className = {`Genre ${checkGenreStyles} ${checkGenreColors}`} onClick = {() => this.props.genre_nav.selectGenre(this.props.genre)} > {imgpart} {textpart}</div>
    );
  }
}

export default A_genre
