import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_avatar.scss'

const Sizes = [
  'small_thumb',
  'medium_thumb',
  'large_thumb',
]


const A_avatar = ({
  onClick,
  avatarSizes
}) => {


  const checkavatarSizes = Sizes.includes(avatarSizes)
  ? avatarSizes : Sizes[0]

  return(
    let imgsrc = '';
    if (!this.props.user) {
      imgsrc = '/assets/avatar_default.svg';
    } else {

    }
    if (avatarSizes == Sizes[0]) {
       imgsrc =  this.props.user ? this.props.user.image.small_thumb: '/assets/avatar_default.svg';
    } else if (avatarSizes == Sizes[1]){
      imgsrc = this.props.user ? this.props.user.image.medium_thumb: '/assets/avatar_default.svg';
    } else {
      imgsrc = this.props.user ? this.props.user.image.large_thumb: '/assets/avatar_default.svg';
    }
    <div>
      <img className = "Avatar"
        onClick = {onClick}
        src = {imgsrc}
        alt = { this.props.user ? this.props.user.name: 'Oops!'}
      />
    </div>

  )
}

export default A_avatar
