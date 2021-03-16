import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_avatar.scss'


class A_avatar extends React.Component {
  render () {

    const checkavatarSizes = Sizes.includes(this.props.avatarSizes)
    ? this.props.avatarSizes : Sizes[0]

    let imgsrc = '';

    if (!this.props.user) {
      imgsrc = '/assets/avatar_default.svg';
    } else if(!this.props.user.image) {
      imgsrc = '/assets/avatar_default.svg';
    } else if (checkavatarSizes == Sizes[0]) {
       imgsrc =  this.props.user.image.small_thumb.url;
    } else if (checkavatarSizes == Sizes[1]){
      imgsrc = this.props.user.image.medium_thumb.url;
    } else {
      imgsrc = this.props.user.image.large_thumb.url;
    }


    return(


      <div>
        <img className = "Avatar"
          onClick = {this.props.onClick}
          src = {imgsrc}
          alt = { this.props.user ? this.props.user.name: 'Oops!'}
        />
      </div>

    )
  }
}

export default A_avatar

const Sizes = [
  'small_thumb',
  'medium_thumb',
  'large_thumb',
]
