import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_input.scss'

const PLACES = [
  'new_post',
  'comment',
  'registration'
];

class A_image_input extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : ''
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

      render() {

        const checkInputPlace = PLACES.includes(this.props.inputPlace)
        ? this.props.inputPlace : PLACES[0]

      return (
        <div className={`Input_image_container ${checkInputPlace}`}>
          <input
            type="file"
            name={this.props.name}
            onChange={this.handleChange}
          />
          <label for="file-upload" class="custom-file-upload">
            <span class="helper"></span>
            <span class="text_label"></span>
            <img src = "/assets/icon_add_img.svg"/>
          </label>
          <span className = {`Limitation p3 mineral-gray`}>{this.props.limitation}</span>
        </div>
      );
    }
  }

export default A_image_input
