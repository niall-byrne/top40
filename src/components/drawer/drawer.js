import React from "react";
import "./drawer.scss";

export default class Drawer extends React.Component {
  render() {
    const image = process.env.PUBLIC_URL + "/data/last.fm.png";
    return (
      <div className={`section drawer ${this.props.open ? "open" : "closed"}`}>
        <div className="zoomed">
          <img
            style={{ width: this.props.size - 2, height: this.props.size - 2 }}
            alt={this.props.name}
            src={this.props.selected.image_large}
          />
        </div>
        <div className="section note">
          {this.props.selected.name}
          <div className="artist">{this.props.selected.artist.name}</div>
          <div className="plays">{this.props.selected.playcount} listens</div>
          <div
            className={`section lastfmlink info${
              this.props.lastfm ? " lastfm" : ""
            }`}
          >
            <img
              onClick={() => this.props.openLastFM(this.props.selected.url)}
              style={{ width: 50, height: 50 }}
              alt="last.fm"
              src={image}
            />
          </div>
        </div>
      </div>
    );
  }
}
