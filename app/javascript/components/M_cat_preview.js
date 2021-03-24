import React from "react"
import PropTypes from "prop-types"
import A_category from "./A_category"
class M_cat_preview extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <div key={category.id}>
            <A_category
            category = {category}
            categoryColors = "zelda-green"
            categoryTypes = 'image'/>
            <a href={`/categories/${category.id}`} >Открыть</a>
            <a href={`/categories/${category.id}/edit`} >Редактировать</a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_cat_preview
