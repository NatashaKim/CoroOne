import React from "react"
import PropTypes from "prop-types"



class A_checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkboxes">
        <label>
          <input
              className = "checkbox"
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

 A_checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default  A_checkbox;