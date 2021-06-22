import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_project_title from "./A_project_title"
import A_text from "./A_text"
import M_user_info from "./M_user_info"
import A_genre from "./A_genre"
import {getuser} from './Api.js';
import '../../assets/stylesheets/M_post_preview.scss'
import '../../assets/stylesheets/colors.scss'


class M_project_header extends React.Component {
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


    let imgsrc = '';
    if (!this.props.project.project_cover.thumb.url) {
      imgsrc = '/assets/project_cover_default.svg';
    } else {
      imgsrc = this.props.project.project_cover.thumb.url;
    }

    let sectionStyle = {}
    sectionStyle = {
      backgroundImage: `linear-gradient( rgba(4, 0, 94, 0.4), rgba(4, 0, 94, 0.4) ), url(${imgsrc})`
    };


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
      <div style={sectionStyle} className = {`Project_header ${checkProjectPlace}`}>


            <div className = "Genres">
             {this.props.project.genres.map(genre => (
                 <A_genre
                 genreType = 'image'
                 genre = {genre}
                 />
              ))}
             </div>

             <A_project_title
              project = {this.props.project}
              headingColor = 'navy-blue'
              headingStyle = "h1"
              headingAlign = 'center_align'
             />

             <A_text
               textColor = 'cold-black'
               textStyle = 'p4'
               textAlign = 'center_align'
               value = {this.props.project.description}
             />

             <A_text
               textColor = 'navy-blue'
               textStyle = 'p4'
               textAlign = 'center_align'
               value = "#хочу"
             />

      </div>
    );
  }
}

export default M_project_header
