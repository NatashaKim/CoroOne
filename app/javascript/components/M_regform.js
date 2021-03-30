import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_select from "./A_select"
class M_regform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: props.user.email ? props.user.email : '',
        username: props.user.username ? props.user.username : '',
        password: props.user.password ? props.user.password : '',
        image: props.user.image.url ? props.user.image.url : ''
    };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);

    }

    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handleUsernameChange(e) {
      this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }
    handleImageChange(e) {
   this.setState({ image: e.target.value });
 }

    render() {
      return (
        <div>

          <label>Email</label>
          <input
            type="text"
            name="user[email]"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <label>Username</label>
          <input
            type="text"
            name="user[username]"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />

          <label>Password</label>
          <input
            type="text"
            name="user[password]"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <img src={this.props.user.image.small_thumb.url}/>
          <A_Iinput
              textChild ={"Изображение"}
              inputStyle="input--image"
              type="file"
              name="user[image]"
              value={this.state.image.url}
              onChange={this.handleImageChange}
            />

          <input type="submit" value="Create post" />
        </div>
      );
    }
  }

export default M_regform
