import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
import A_post_title from "./A_post_title"
import A_button from "./A_button"
import A_text from "./A_text"
import '../../assets/stylesheets/M_post_preview.scss'


class M_necrologypost_preview extends React.Component {

  render () {

    let imgsrc = '';
    if (!this.props.post.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.post.image.thumb.url;
    }


    return (
      <div className = {`Post_preview`}>
            <img className = "Necro_img"
              src = {imgsrc}
            />
            <A_post_title
             post = {this.props.post}
             headingColor = 'ice-white'
             headingAlign = 'center_align'/>
          <A_text value = {this.props.post.project_start_date}/>
          <A_text value = {this.props.post.project_end_date}/>
           <A_category
           category = {this.props.post.category}
           categoryTypes = "image"/>
            <A_text value = "Любимый ребенок пользователя GROOMka"/>
            <A_button
               value = "F"
               buttonSize = "btn--small"
               buttonColor = "btn--green"/>

      </div>
    );
  }
}

export default M_necrologypost_preview
