import React from "react"
import PropTypes from "prop-types"

import M_project_side_info from "./M_project_side_info"
import A_project_cover from "./A_project_cover"
import M_project_header from "./M_project_header"
import M_project_checklist from "./M_project_checklist"


import {getpost_type} from './Api.js';
import '../../assets/stylesheets/M_postview.scss'

class T_project_show extends React.Component {

  render() {
    return (
      <div className="Project_page">

        <div className="Project_image_header">
          <div className="Article_marker_holder">
            <div className="Project_marker_placeholder">
              В процессе
            </div>
          </div>
          <A_project_cover
            project = {this.props.project}
          />
        </div>




        <div className="M_project_div">
          <div className="M_project_left_section">
            <M_project_side_info
              project = {this.props.project}
            />
          </div>

          <div className="M_project_right_section">
            <div>

              <M_project_header
                project = {this.props.project}
                current_user_id = {this.props.current_user_id}
                genres = {this.props.genres}
              />

              <M_project_checklist
                project = {this.props.project}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default T_project_show
