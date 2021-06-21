import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_title from "./A_title"
import A_text from "./A_text"
import M_user_info from "./M_user_info"
import A_genre from "./A_genre"
import {getuser} from './Api.js';
import '../../assets/stylesheets/M_post_preview.scss'
import '../../assets/stylesheets/colors.scss'


const PLACES = [
  'new',
  'top',
  'account'
]


class M_project_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        author: null,
      };

      getuser(this.props.project.user_id).then((u)=>{
        this.setState({author: u})
      });
  }

  render () {

    let projectPlace = " ";

    let checkProjectPlace = PLACES.includes(this.props.projectPlace)
    ? this.props.projectPlace : PLACES[0]

    let imgsrc = '';
    if (!this.props.project.project_cover.small_thumb.url) {
      imgsrc = '/assets/project_cover_preview_default.svg';
    } else if (this.props.projectPlace == 'new') {
      imgsrc = this.props.project.project_cover.large_thumb.url;
    } else if (this.props.projectPlace == 'top') {
      imgsrc = this.props.project.project_cover.medium_thumb.url;
    } else {
      imgsrc = this.props.project.project_cover.small_thumb.url;
    }

    let sectionStyle = {}
    if (checkProjectPlace == 'new' || checkProjectPlace == 'top') {
      sectionStyle = {
        backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
      };
    }

    let headingStyle = '';
    if (this.props.projectPlace == 'new') {
      headingStyle = 'h6';
    } else if (this.props.projectPlace == 'top') {
      headingStyle = 'small3';
    } else {
      headingStyle = 'p4';
    }

    let headingColor = '';
    if (this.props.projectPlace == 'new') {
      headingColor = 'zelda-green';
    } else if (this.props.projectPlace == 'top') {
      headingStyle = 'ice-white';
    } else {
      headingColor = 'navy-blue';
    }

    return (
      <div style={sectionStyle} className = {`Project_preview ${checkProjectPlace}`}>

        <img className = "Small_cover"
          src = {imgsrc}
        />


          <div className = "For_new">
            <M_user_info
            user={this.state.author}
            infoType = 'for_project'
            />

            <div className = "Genres">
             {this.props.project.genres.map(genre => (
                 <A_genre
                 genreType = 'image'
                 genre = {genre}
                 />
              ))}
             </div>
           </div>

          <A_title
           title = {this.props.project.name}
           headingColor = {headingColor}
           headingStyle = {headingStyle}/>

         <span>{this.props.place}</span>

         <A_text
           textColor = 'ice-white'
           textStyle = 'small6'
           textAlign = 'left_align'
           value = {this.props.project.description}
         />

      </div>
    );
  }
}

export default M_project_preview
