import React from "react"

import axios from 'axios';
import PropTypes from "prop-types"
import A_textarea from "./A_textarea"
import M_textarea_with_label from "./M_textarea_with_label"
import A_button from "./A_button"
import '../../assets/stylesheets/O_postform.scss'

class O_questionform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        content: props.post.content ? props.post.content : ''
}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentDidMount(e) {
        this.setState({
          authenticity_token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
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

            <M_textarea_with_label
              label = "Пожалуйста, расскажите нам о своем опыте в индустрии гейм-дизайна"
              name="question[content]"
              value={this.state.content}
              onChange={this.handleContentChange}
            />


          <A_button
            value = "Отправить заявку"
            buttonSize = "btn--small"
            buttonColor = "btn--gray">
          </A_button>

         </div>
        </div>
      );
    }
  }

export default O_questionform
