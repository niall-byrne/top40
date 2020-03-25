import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.drawerImageSize = 220;
    }

    render() {
        const width = this.props.size;
        const height = this.props.size;
        
        if (!this.props.flipped) {
            return (    
                <div className={"album album" + this.props.index} onClick={(e) => this.props.drawerHandler(e, this.props.index - 1)}>
                    <div className="flipp">                    
                        <div className="front">
                            <img style={{width: width, height: height }} alt={this.props.name} src={this.props.url}/>
                        </div>                         
                    </div>
                </div>
            );
        } else {
            return (    
                <div className={"album album" + this.props.index} onClick={(e) => this.props.drawerHandler(e, this.props.index - 1)}>
                    <div className="flipp">                       
                        <div style={{width: width + 6, height: height + 2}} className="back">
                            {this.props.index}
                        </div> 
                    </div>
                </div>
            );
        }
        
    }
}
