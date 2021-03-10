import React from "react"
import PropTypes from "prop-types"
class A_like_button extends React.Component {

  getInitialState() {
      return {token: ''}
  }

  componentDidMount(e) {
      this.setState({token: document.querySelector('meta[name="csrf-token"]').content})
  }


  handleDelete = (post, like) => {

let requestOption = {method: ''}
if(like) requestOption.method = 'DELETE'
else requestOption .method = 'POST';

let requestUrl = "/posts/"+post.id+"/likes";
if(like) requestUrl+="/"+like.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);


  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
  });
}


  render () {
    let pre_like = this.props.likes.find((element, index, array) => {return element.user_id ==this.props.current_user_id}) ;

    return (
      <div class="like">
        <button onClick={() => this.handleDelete(this.props.post, pre_like)}>D</button>
      </div>
    );

  }
}

export default A_like_button
