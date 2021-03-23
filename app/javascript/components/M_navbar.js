import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_icon from "./A_icon.js"

const Types = [
  'profile',
  'bookmarks',
  'notification'
];


const Imgsrc = {
  'profile': '/assets/icon_profile.svg',
  'profile_fill': '/assets/icon_profile_menu_fill.svg.svg',

  'bookmarks': '/assets/icon_bookmarks_unfilled.svg',
  'bookmarks_fill': '/assets/icon_bookmarks_menu_fill.svg',

  'notification': '/assets/icon_notification.svg',
  'notification_fill': '/assets/icon_notification_menu_fill.svg'
}


class M_navbar extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : '',
        show: true
      };

      this.handleChange = this.handleChange.bind(this);
      this.toggleImage = this.toggleImage.bind(this);

    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    toggleImage = () => {
      this.setState(state => ({show: !state.show}))
    }

    if (icon_type = "profile") {
      getImg =() => this.state.show ? 'profile' : 'profile_fill'
    } elseif (icon_type = "bookmarks") {
      getImg = () => this.state.show ? 'bookmarks' : 'bookmarks_fill'
    } else (icon_type = "notification") {
      getImg = () => this.state.show ? 'notification' : 'notification_fill'
    }

      render() {
        const imgName = this.getImg()

        const checkiconTypes = Types.includes(this.props.iconTypes)
        ? this.props.iconTypes : Types[0]

        let imgret = '';
        if (checkiconTypes == Types[0]) {
           imgret =  "";
        }  else {
          imgret = this.getImg();
        }



      return (
        <div className="navbar">
            <a href={}>
                <A_icon src = {Imgsrc[imgret]} icon_type = {icon_type}/>
            </a>
        </div>
      );
    }
  render () {
    return (

    )
  }
}


export default M_navbar
