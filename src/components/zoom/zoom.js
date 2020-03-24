import React from 'react';
import './zoom.scss';
import Drawer from '../drawer/drawer.js';

export default class Zoom extends React.Component {
    constructor(props) {
        super(props);
        this.drawerImageSize = 220;
      }

    render() {
        return (            
            <div className="section">                
                <div>                    
                    <div className={"section closeupcontainer"}>
                        <Drawer lastfm={this.props.lastfm} openLastFM={this.props.openLastFM} size={this.drawerImageSize} selected={this.props.selected} open={this.props.open}/>
                    </div>
                </div>
                <div className="section zoom">      
                    <div className="section titlecontainer">
                        My Top 40 Albums
                    </div>
                </div>                
            </div>
        );
    }
}