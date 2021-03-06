import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_category.scss'
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'

const STYLES = [
  'small2',
  'small1',
  'p4'
]

const TYPES = [
  'default',
  'image',
  'text_with_image',
];

const COLORS = [
  'zelda-green',
  'mineral-gray',
  'ice-white'
]


class A_category extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        bgColor: ""
      };


    }

    boxClick = (e) => {
      this.setState({
        bgColor: "red"
      })
    }


  render () {
    let category = '';
    if (this.props.category) {
      category = this.props.category.name;
    }

    let post_type = '';
    if (this.props.post_type) {
      post_type = this.props.post_type.name
    } else if (this.props.post_type_name) {
      post_type = this.props.post_type_name
    }

    let checkCategoryStyles = STYLES.includes(this.props.categoryStyles)
    ? this.props.categoryStyles : STYLES[0]

    let checkCategoryColors = COLORS.includes(this.props.categoryColors)
    ? this.props.categoryColors : COLORS[0]

    let checkCategoryTypes = TYPES.includes(this.props.categoryTypes)
    ? this.props.categoryTypes : TYPES[0]

    let imgsrc = '';
    if (checkCategoryTypes == TYPES[0]) {
       imgsrc = '';
    } else if (this.props.category == null) {
       imgsrc = '';
    } else if (checkCategoryTypes == TYPES[1]) {
       imgsrc = this.props.category.imagesrc;
    } else {
      imgsrc = this.props.category.imagesrc;
    }

    let textpart = <span>{category}</span>
    let imgpart = <img className = "Category_img" src = {imgsrc}/>


    return (
      <a className = {`Category ${checkCategoryStyles} ${checkCategoryColors}`} href={`/posts/by_type/${post_type}?category=${category}`} style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}> {imgpart} {textpart}</a>
    );
  }
}

export default A_category
