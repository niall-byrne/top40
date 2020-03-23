import React from 'react';
import './zoom.scss';
import Drawer from '../drawer/drawer.js';

export default class Zoom extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (            
            <div className="section">                
                <div>
                    <div className={"section closeupcontainer"}>
                        {this.props.closed ? <Drawer open={true}/> : <Drawer open={false}/>}
                    </div>
                </div>
                <div className="section zoom">      
                    <div className="section titlecontainer" onClick={this.props.drawerHandler}>
                        My Top 40
                    </div>
                </div>                
            </div>
        );
    }
}