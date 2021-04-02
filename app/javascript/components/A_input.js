import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_input.scss'


const Types = [
  'default',
  'password',
  'with_image'
];

const PLACES = [
  'workshop_comment',
  'registration',
  'new_post',
  'pub_comment'
];

const Imgsrc = {
  'visibility': '/assets/icon_visibility.svg',
  'unvisibility': '/assets/icon_unvisibility.svg',
  'image': '/assets/icon_add_img_comment.svg'
}

class A_input extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : '',
        show: true
      };

      this.handleChange = this.handleChange.bind(this);
      this.toggleImage = this.toggleImage.bind(this);

    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    toggleImage = () => {
      this.setState(state => ({show: !state.show}))
    }

    getImg = () => this.state.show ? 'visibility' : 'unvisibility'
    getInputType = () => this.state.show ? 'text' : 'password'

      render() {
        const imgName = this.getImg()

        const checkinputTypes = Types.includes(this.props.inputTypes)
        ? this.props.inputTypes : Types[0]

        const checkInputPlace = PLACES.includes(this.props.inputPlace)
        ? this.props.inputPlace : PLACES[0]

        let imgret = '';
        if (checkinputTypes == Types[0]) {
           imgret =  "";
        } else if (checkinputTypes == Types[2]) {
          imgret = 'image';
        } else {
          imgret = this.getImg();
        }

        let typeret = '';
        if (checkinputTypes == Types[0]) {
           typeret =  "text";
        } else if (checkinputTypes == Types[2]) {
          typeret =  "text";
        }  else {
          typeret = this.getInputType();
        }


      return (
        <div className={`Input_container ${checkinputTypes} ${checkInputPlace}`}>
          <input
            className="tg"
            type={typeret}
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
          <img src = {Imgsrc[imgret]} onClick={this.toggleImage}/>
        </div>
      );
    }
  }

export default A_input
