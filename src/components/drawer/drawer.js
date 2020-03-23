import React from 'react';
import './drawer.scss';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const styles = { 
            transform: `translateX(100px)` 
        };

        return (
            <div styles={styles} className={`"section ${this.props.open ? "open" : "closed"}"`}>
                CloseUp Panel test test test test test test test test test test test test test test test test test test test test test
            </div>
        );
    }
}

