import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_icon from "./A_icon.js"

const TYPES = [
  'more news',
  'more articles',
  'more reviews'
];

class M_more_info extends React.Component {
    render() {
      const checkMoreInfoType = TYPES.includes(this.props.moreInfoType)
      ? this.props.moreInfoType : TYPES[0]

      let more_info_href = '';
      let more_info_title = ''

      if (checkMoreInfoType == TYPES[0]) {
         more_info_href = "/posts/by_type/Новости",
         more_info_title = "Все новости";
      } else if (checkMoreInfoType == TYPES[1]) {
        more_info_href = "/posts/by_type/Статьи",
        more_info_title = "Все статьи";
      } else if (checkMoreInfoType == TYPES[2]) {
        more_info_href = "/posts/by_type/Обзоры",
        more_info_title = "Все обзоры";
      } else {
        more_info_href = "",
        more_info_title = "";
      }

      return (
        <div>
          <a href = {more_info_href}>
            {more_info_title}
            <A_icon
              Icon = "arrow_big"
            />
          </a>
        </div>
      );
    }
  }


export default M_more_info
