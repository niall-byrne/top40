import React from "react";
import Tile from "./tile.js";
import "./covers.scss";

export default class Covers extends React.Component {
  render() {
    const covers = this.props.albums.slice(this.props.start, this.props.end);
    return (
      <div className={"section " + this.props.class}>
        {covers.map((album, index) => {
          return (
            <div className="covers-album" key={index + 1}>
              <Tile
                drawerHandler={() => this.props.drawerHandler(index)}
                name={album.name}
                size={this.props.size}
                url={album.image}
                flipped={album.flipped}
                index={index + 1}
                key={index + 1}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
