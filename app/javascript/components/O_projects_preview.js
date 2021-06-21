import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'

import M_more_info from "./M_more_info"
import A_title from "./A_title.js"
import M_project_preview from "./M_project_preview"
import A_button from "./A_button"
import {get_projects_by_user} from './Api.js'
import {get_newest_projects} from './Api.js'


const PLACES = [
  'new',
  'top',
  'account'
]

class O_projects_preview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        projects: null
      }
      if (this.props.user) {
        get_projects_by_user(this.props.user.id).then((u)=>{
          this.setState({projects: u})
        })
      } else {
        get_newest_projects().then((u)=>{
          this.setState({projects: u})
        })
      }
    }
  render () {

    let checkProjectsPlace = PLACES.includes(this.props.projectsPlace)
    ? this.props.projectsPlace : PLACES[0]


    let headingStyle = ""
    if (checkProjectsPlace == 'new') {
      headingStyle = "h4"
    } else if (checkProjectsPlace == 'account') {
      headingStyle = "h6"
    } else {
      headingStyle = ""
    }

    if (!this.state.projects) {return ""}
    let rest_projects = this.state.projects;
    return (
      <div className = {`Projects_preview ${checkProjectsPlace}`} >
        <div className = 'More_new_projects'>
          <A_title
            headingStyle = {headingStyle}
            title = "Новые проекты пользователей"
            headingColor = 'mineral-gray'
            headingAlign = 'left_align'
          />
          <M_more_info
            moreInfoType = 'more_new_projects'
          />
        </div>
        <div className = "Projects_preview_wrapper">
          <A_button
            buttonColor = 'btn--create-project'
            imgscr = '/assets/button_create_project.svg'
            value = 'Создать проект'
          />
          {rest_projects.map(project => (
            <M_project_preview
            genres = {this.props.genres}
            key = {project.id}
            project = {project}
            projectPlace = {this.props.projectPlace}
            user = {this.props.user} />
           ))}
         </div>
      </div>
    );
  }
}

export default O_projects_preview
