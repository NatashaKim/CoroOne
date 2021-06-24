import React from "react"
import PropTypes from "prop-types"
import A_checkbox from "./A_checkbox"
import A_label from "./A_label"
import A_title from "./A_title"
import M_social_icons from "./M_social_icons"
import M_user_info from "./M_user_info"
import {getuser} from './Api.js';

class M_project_side_info extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        author: null
      };

      getuser(this.props.project.user_id).then((u)=>{
        this.setState({author: u})
      });
  }
  render() {

    return (
      <div className="Project_side_info">

        <div className="Social_icons_holder">
          <div className="Shape">
              <M_social_icons/>
          </div>
        </div>

        <div className="Side_info_section">
          <div className="Side_info_block">
            <A_title
              headingStyle = 'p4'
              headingColor = 'zelda-green'
              headingAlign = 'left_align'
              title = "Скачать игру:"
            />

            <a className="Project_link">
              {this.props.project.download_project}
            </a>
          </div>


          <div className="Side_info_block">
            <A_title
              headingStyle = 'p4'
              headingColor = 'zelda-green'
              headingAlign = 'left_align'
              title = "Скачать игру:"
            />

            <a className="Project_link">
              {this.props.project.donate_project}
            </a>
          </div>


          <div className="Side_info_block">
            <A_title
              headingStyle = 'p4'
              headingColor = 'zelda-green'
              headingAlign = 'left_align'
              title = "Проект был создан:"
            />

            <a className="Project_link">
              {this.props.project.project_start_date}
            </a>
          </div>


          <div className="Side_info_block">
            <A_title
              headingStyle = 'p4'
              headingColor = 'zelda-green'
              headingAlign = 'left_align'
              title = "Релиз планируется на:"
            />

            <a className="Project_link">
              {this.props.project.project_end_date}
            </a>
          </div>


          <div className="Side_info_block">
            <A_title
              headingStyle = 'p4'
              headingColor = 'zelda-green'
              headingAlign = 'left_align'
              title = "Разработчик проекта:"
            />

            <M_user_info
              user={this.state.author}
              infoType = 'for_project'
            />
          </div>



        </div>





      </div>
    );
  }
}

export default M_project_side_info
