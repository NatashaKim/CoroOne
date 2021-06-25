import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_project_title from "./A_project_title"
import A_text from "./A_text"
import A_button from "./A_button"
import M_user_info from "./M_user_info"
import A_genre from "./A_genre"
import A_followers_followees from "./A_followers_followees"
import '../../assets/stylesheets/M_post_preview.scss'
import '../../assets/stylesheets/colors.scss'
import '../../assets/stylesheets/M_project_header.scss'


class M_project_header extends React.Component {

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


            <A_button
              value = "Редактировать"
              buttonSize = "btn--small"
              buttonColor = "btn--gray">
            </A_button>

            <div className = "Project_description">
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
               value = "#разработка #хештегов #для_проектов #в_процессе"
             />

             </div>

      </div>
    );
  }
}

export default M_project_header
