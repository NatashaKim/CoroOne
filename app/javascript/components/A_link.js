import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_label.scss'


const COLORS = [
  'neon-blue',
  'mineral-gray',
  'link-create',
  'new-project'
]

const Imgsrc = {
  'create_project': '/assets/button_create_project.svg',
  'button_plus': '/assets/button_plus.svg'
}


const A_link = ({
  link,
  value,
  linkColor
}) => {

  const checkLinkColor = COLORS.includes(linkColor)
  ? linkColor : COLORS[0]

  let imgret = '';
  if (linkColor == 'link-create') {
     imgret =  'button_plus';
  } else if (linkColor == 'new-project') {
    imgret =  'create_project';
  } else {
    imgret = '';
  }

  return(
      <a className = {`Link p4 ${checkLinkColor}`} href = {link}>
        <span>{value}</span>
        <img src = {Imgsrc[imgret]}/>
      </a>
  )
}

export default A_link
