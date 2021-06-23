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

    return (
      <div className = 'Project_header'>


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
