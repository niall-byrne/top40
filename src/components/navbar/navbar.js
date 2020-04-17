import React from "react";
import Gravatar from "react-gravatar";
import "./navbar.scss";

export default class NavBar extends React.Component {
  render() {
    const profile = "https://www.last.fm/user/" + this.props.attrs.user;

    return (
      <div className="section navbar">
        <div className="navbaritems section nav-one">
          <a href={profile} rel="noopener noreferrer" target="_blank">
            <Gravatar rating="g" email={this.props.attrs.email} />
          </a>
        </div>
        <div className="navbaritems section nav-two">
          {this.props.attrs.user}
        </div>
      </div>
    );
  }
}
