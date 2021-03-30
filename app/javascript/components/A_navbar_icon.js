import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_navbar.scss'
import A_icon from "./A_icon.js"

const Types = [
  'profile',
  'bookmarks',
  'notification',
  'search'
];


const Imgsrc = {
  'profile': '/assets/icon_profile.svg',
  'profile_fill': '/assets/icon_profile_menu_fill.svg',

  'bookmarks': '/assets/icon_bookmarks_unfilled.svg',
  'bookmarks_fill': '/assets/icon_bookmarks_menu_fill.svg',

  'notification': '/assets/icon_notification.svg',
  'notification_fill': '/assets/icon_notification_menu_fill.svg',

  'search': '/assets/icon_search.svg',
  'search_fill': '/assets/icon_search_menu_fill.svg'
}


class A_navbar_icon extends React.Component {

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


    getProfile =() => this.state.show ? 'profile' : 'profile_fill';
    getBookmarks = () => this.state.show ? 'bookmarks' : 'bookmarks_fill';
    getNotification = () => this.state.show ? 'notification' : 'notification_fill';
    getSearch = () => this.state.show ? 'search' : 'search_fill';

      render() {

        const checkiconTypes = Types.includes(this.props.iconTypes)
        ? this.props.iconTypes : Types[0]

        let imgret = '';
        if (checkiconTypes == Types[0]) {
           imgret = this.getProfile();
        } else if (checkiconTypes == Types[1]) {
          imgret = this.getBookmarks();
        } else if (checkiconTypes == Types[2]) {
          imgret = this.getNotification();
        } else {
          imgret = this.getSearch();
        }


      return (
        <a className="Navbar_icon">
          <img src = {Imgsrc[imgret]} onClick={this.toggleImage}/>
        </a>
      );
    }
  }


export default A_navbar_icon
