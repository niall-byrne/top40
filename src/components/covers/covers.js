import React from 'react';
import Tile from '../tile/tile.js'
import './covers.sass';

export default class Covers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const covers = this.props.albums.slice(this.props.start, this.props.end);
        console.log(covers);
        
        return (
            <div className={"section " + this.props.class}>   
                {covers.map((album, index) => {
                  return (
                    <div className="covers-album" key={index}>
                      <Tile size={this.props.size} url={album.image} key={index}/>
                    </div>
                  )
                })}             
            </div>
        );
    }
}