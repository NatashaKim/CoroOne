import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_checkbox.scss'
import A_checkbox from "./A_checkbox.js"
import A_button from "./A_button.js"



const items = [
  'One',
  'Two',
  'Three',
];

class M_checkbox extends React.Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <A_checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className = "checkbox_button">

                  <A_button
                    type = "Отменить"
                    buttonSize = "btn--small"
                    buttonColor = "btn--minor">
                  </A_button>

                  <A_button
                    type = "Сохранить"
                    buttonSize = "btn--small"
                    buttonColor = "btn--gray">
                  </A_button>

              </div>

            </form>

          </div>
        </div>
      </div>
    );
  }
}


export default M_checkbox;
