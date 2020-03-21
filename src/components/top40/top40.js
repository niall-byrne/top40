import React from 'react';
import Top10 from './top10';

export default class Top40 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div className="section top40">
              <Top10 albums={this.props.albums}/>
            </div>
        );
    }
}
