import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_icon from "./A_icon.js"
import A_title from "./A_title.js"

const TYPES = [
  'more_news',
  'more_articles',
  'more_reviews',
  'more_necrologies'
];

class M_more_info extends React.Component {
    render() {
      const checkMoreInfoType = TYPES.includes(this.props.moreInfoType)
      ? this.props.moreInfoType : TYPES[0]

      let more_info_href = '';
      let more_info_title = '';
      let more_info_style = '';
      let more_info_color = 'mineral-gray';

      if (checkMoreInfoType == TYPES[0]) {
         more_info_href = "/posts/by_type/Новости",
         more_info_title = "Все новости",
         more_info_style = 'h4';
      } else if (checkMoreInfoType == TYPES[1]) {
        more_info_href = "/posts/by_type/Статьи",
        more_info_title = "Все статьи";
        more_info_style = 'h4';
      } else if (checkMoreInfoType == TYPES[2]) {
        more_info_href = "/posts/by_type/Обзоры",
        more_info_title = "Все обзоры";
        more_info_style = 'h4';
      } else if (checkMoreInfoType == TYPES[3]) {
        more_info_href = "/posts/by_type/Кладбище проектов",
        more_info_title = "Все проекты";
        more_info_style = 'h4';
      } else {
        more_info_href = "",
        more_info_title = "",
        more_info_style = "";
      }

      return (
        <div className = {`More_info ${checkMoreInfoType}`}>
          <a href = {more_info_href}>
            <A_title
            headingStyle = {more_info_style}
            title = {more_info_title}
            headingColor = {more_info_color} />
            <A_icon
              Icon = "arrow_big"
            />
          </a>
        </div>
      );
    }
  }


export default M_more_info
