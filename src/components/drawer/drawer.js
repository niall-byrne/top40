import React from 'react';
import './drawer.scss';
import Tile from '../tile/tile.js';

export default class Drawer extends React.Component {
    render() {
        const image='./data/last.fm.png';
        return (
            <div className={`section drawer ${this.props.open ? "open" : "closed"}`}>
                <div className="zoomed">
                    <Tile size={this.props.size-2} url={this.props.selected.image}/>
                </div>
                <div className="section note">
                    {this.props.selected.name}
                    <div className="artist">{this.props.selected.artist.name}</div>
                    <div className="plays">{this.props.selected.playcount} listens</div>
                    <div className={`section info${this.props.lastfm ? " lastfm" : ""}`}>
                        <img onClick={() => this.props.openLastFM(this.props.selected.url)} style={{width: 50, height: 50 }} alt="last.fm" src={image}/>
                    </div>
                </div>
            </div>
        );
    }
}

