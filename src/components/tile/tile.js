import React from 'react';

export default class Tile extends React.Component {
    render() {
        const width = this.props.size;
        const height = this.props.size;
        return (
            <img style={{width: width, height: height }} alt={this.props.name} src={this.props.url}/>
        );
    }
}
