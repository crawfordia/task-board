import React from 'react';

import Drag from './Drag';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, id } = this.props;

        return <Drag.Item type="card" data={{ id }}>
            <div 
                draggable={true} 
                className="box">
                <span>{ title }</span>
            </div>
        </Drag.Item>   
    }
}