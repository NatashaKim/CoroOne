import React from "react"
import PropTypes from "prop-types"

const imageSrc ={
  fill: '/assets/like_icon_fill.svg',
  unfill: '/assets/like_icon_unfill.svg'
}

class A_like_button extends React.Component {


  constructor(props) {
      super(props);
      this.state={
        likes_count: this.props.likes ? this.props.likes.length : 0,
        pre_like: this.props.likes ? this.props.likes.find((element, index, array) => {return element.user_id ==this.props.current_user_id}) : null
      }
}


  componentDidMount(e) {
      this.setState({
        token: document.querySelector('meta[name="csrf-token"]').content
      })
  }


  handleClick = () => {

let requestOption = {method: ''}
if(this.state.pre_like) {
  requestOption.method = 'DELETE';
  this.setState({
    likes_count:  this.state.likes_count-1
  });
}
  else {requestOption .method = 'POST';
  this.setState({
    likes_count:  this.state.likes_count+1
  });
}

let requestUrl = "/posts/"+this.props.post.id+"/likes";
if(this.state.pre_like) requestUrl+="/"+this.state.pre_like.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);


  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
    this.setState({
      pre_like: result})
  });
}

getImg = () => this.state.pre_like ? imageSrc.fill : imageSrc.unfill


  render () {

    return (
      <div className="Like_button">
        <button onClick={

          () => {
            this.handleClick();
          }

        }><img src={this.getImg()}/></button>
        <span className='p3 mineral-gray'>{this.state.likes_count}</span>
      </div>
    );

  }
}

export default A_like_button
