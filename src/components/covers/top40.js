import React from "react";
import Covers from "./covers.js";

export default class Top40 extends React.Component {
  render() {
    return (
      <div className="section top40">
        <div className="center-covers">
          <div className="covers-container">
            <Covers
              drawerHandler={this.props.drawerHandler}
              class="covers"
              start={0}
              end={40}
              size={this.props.size}
              albums={this.props.albums}
            />
          </div>
        </div>
      </div>
    );
  }
}
