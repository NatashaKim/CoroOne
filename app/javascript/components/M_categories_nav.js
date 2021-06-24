import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'


class M_categories_nav extends React.Component {

  render () {
    let categories = this.props.categories.filter(c => c.post_type_id ==this.props.post_type_id);

    let post_type = '';
    if (this.props.post_type_name) {
      post_type = this.props.post_type_name
    }



    return (
      <div className = "Genres_nav">
        <div className = "Genres_container">
          <div className = "Genres_list">
            {categories.map(category => (

                <a className = "Genre" href={`/posts/by_type/${post_type}?category=${category.name}`} key={category.id}>

                  <img className = "Genre_img" src = {category.imagesrc}/>
                  <div className = "Category_name mineral-gray h6">
                    {`${category.name}`}
                  </div>
                </a>
             ))}
          </div>
        </div>
      </div>
    );
  }
}

export default M_categories_nav
