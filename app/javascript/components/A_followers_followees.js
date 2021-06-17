import React from "react"
import PropTypes from "prop-types"

class A_followers_followees extends React.Component {


  constructor(props) {
      super(props);
      this.state={
        followers_count: this.props.user.followers ? this.props.user.followers.length : 0,
        followees_count: this.props.user.followees ? this.props.user.followees.length : 0
      }
  }

  render () {

    return (
      <div className="Followers_followees">
        <a className="Followers_button" href={``}>
          <img src="/assets/icon_followers.svg"/>
          <span className='p3 navy-blue'>
            {this.state.followers_count}
          </span>
        </a>
        <a className="Followees_button" href={`/users/${this.props.user.id}/following`}>
          <img src="/assets/icon_followees.svg"/>
          <span className='p3 navy-blue'>
            {this.state.followees_count}
          </span>
        </a>
      </div>
    );
  }
}

export default A_followers_followees
