import React from "react"
import PropTypes from "prop-types"

class A_dates_of_life extends React.Component {
  render () {
    let start_date = new Date(this.props.post.project_start_date);
    let start_month = start_date.getMonth()+1;
    let start_year = start_date.getFullYear();

    let end_date = new Date(this.props.post.project_end_date);
    let end_month = end_date.getMonth()+1;
    let end_year = end_date.getFullYear();
    return (
      <div className = "Dates_of_life small5 mineral-gray">
        {start_month}.{start_year} - {end_month}.{end_year}
      </div>
    );
  }
}

export default A_dates_of_life
