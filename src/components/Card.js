import React from 'react';

import Drag from './Drag';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, id, onSelect } = this.props;

        return <Drag.Item type="card" data={{ id }}>
            <div 
                draggable={true} 
                className="box pointer"
                onClick={() => onSelect(id)}>
                <span>{ title }</span>
            </div>
        </Drag.Item>   
    }
}