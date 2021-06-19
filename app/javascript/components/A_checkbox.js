import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_checkbox.scss'


class A_checkbox extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        checked: props.checked
      };
      this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    toggleCheckbox = () => {
      this.setState(state => ({checked: !state.checked}))
    }


  render() {
    let checked = {};

    if(this.state.ckecked) checked= {checked:"on"};

    return (
      <div className="checkboxes">
        <label>
          <input
              className = "checkbox"
              type="checkbox"
              name = {this.props.name}
              checked={this.state.checked}
              {...checked}
              onChange={this.toggleCheckbox}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}


export default  A_checkbox;
