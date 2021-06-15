import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_textarea from "./A_textarea"
import A_button from "./A_button"
import M_input_with_label from "./M_input_with_label"
import M_image_input_with_label from "./M_image_input_with_label"
import M_textarea_with_label from "./M_textarea_with_label"

class O_regform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: props.user.email ? props.user.email : '',
        username: props.user.username ? props.user.username : '',
        description: props.user.description ? props.user.description : '',
        image: props.user.image.url ? props.user.image.url : '',
        password: props.user.password ? props.user.password : '',
        password_confirmation: props.user.password_confirmation ? props.user.password_confirmation : '',
        current_password: props.user.current_password ? props.user.current_password : '',

    };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleCurrentPasswordChange = this.handleCurrentPasswordChange.bind(this);
      this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);

    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handleUsernameChange(e) {
      this.setState({ username: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleImageChange(e) {
   this.setState({ image: e.target.value });
    }
     handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    }
    handleCurrentPasswordChange(e) {
    this.setState({ current_password: e.target.value });
    }
    handlePasswordConfirmationChange(e) {
    this.setState({ password_confirmation: e.target.value });
    }

    render() {
      return (
        <div className = "Postform">
          <div className = "Postform_body">

          <input
            type="hidden"
            name="authenticity_token"
            value={this.state.authenticity_token}
          />

          <M_input_with_label
            label = "Email"
            inputPlace = "new_post"
            name="user[email]"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <M_input_with_label
            label = "Username"
            inputPlace = "new_post"
            name="user[username]"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />

          <M_input_with_label
            label = "description"
            inputPlace = "new_post"
            name="user[description]"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />

          <M_image_input_with_label
            label = "Аватар"
            name="user[image]"
            onChange={this.handleImageChange}
            limitation = "Не менее 1440px Х 800px"
          />

          <M_input_with_label
            label = "password"
            inputPlace = "new_post"
            name="user[password]"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <M_input_with_label
            label = "password_confirmation"
            inputPlace = "new_post"
            name="user[password_confirmation]"
            value={this.state.password_confirmation}
            onChange={this.handlePasswordConfirmationChange}
          />

          <M_input_with_label
            label = "current_password"
            inputPlace = "new_post"
            name="user[current_password]"
            value={this.state.current_password}
            onChange={this.handleCurrentPasswordChange}
          />



          </div>

          <A_button
            value = "Сохранить"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

        </div>
      );
    }
  }

export default O_regform
