import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import A_category from "./A_category"

class M_categories_nav extends React.Component {



  render () {
    let categories = this.props.categories.filter(c => c.post_type_id ==this.props.post_type_id);

    let post_type_name = '';
    if (this.props.post_type_name) {
      post_type_name = this.props.post_type_name
    }



    return (
      <div className = "Genres_nav">
        <div className = "Genres_container">
          <div className = "Genres_list">
            {categories.map(category => (

                <div>
                <A_category
                categoryTypes = 'image'
                category = {category}
                post_type_name = {post_type_name}
                />
                </div>
             ))}
          </div>
        </div>
      </div>
    );
  }
}

export default M_categories_nav
