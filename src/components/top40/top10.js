import React from 'react';
import Tile from '../tile/tile.js'
import './top10.css';

export default class Top10 extends React.Component {
    constructor(props) {
        super(props);
        this.size = 64;
    }

    render() {
        const top10 = this.props.albums.splice(0, 10);
        
        return (
            <div className="section top10">   
                {top10.map((album, index) => {
                  return (
                    <div className="top10-album" key={index}>
                      <Tile size={this.size} url={album.image} key={index}/>
                    </div>
                  )
                })}             
            </div>
        );
    }
}