import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import {get_projects_by_user} from './Api.js'

import M_project_preview from "./M_project_preview"


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

    if (!this.state.projects) {return ""}
    let rest_projects = this.state.projects;
    return (
      <div className = "Projects_preview" >
        {rest_projects.map(project => (
          <M_project_preview
          genres = {this.props.genres}
          key = {project.id}
          project = {project}
          projectPlace = 'account'
          user = {this.props.user} />
         ))}
      </div>
    );
  }
}

export default O_projects_preview
