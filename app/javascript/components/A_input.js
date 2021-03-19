import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_input.scss'
import IconVisibility from '../../assets/stylesheets/A_input.scss'
import IconUnvisibility from

class A_input extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : '',
      };
      this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
    render() {
      return (
        <div className="lalainput">
          <input
            className="tg"
            type={this.props.type}
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
          <img src = {}/>
        </div>
      );
    }
  }

export default A_input


const Imgsrc = {
  'visibility': '/assets/icon_visibility.svg',
  'unvisibility': '/assets/icon_unvisibility.svg',
}
