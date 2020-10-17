import React from 'react';

import TextInput from './TextInput';

const style = {
    maxWidth: '700px',
    margin: '3rem auto',
    background: 'white'
}

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, description='', onClose, onChangeCard } = this.props;

        return <div className="box" style={style}> 
            <h2>{ title }</h2>
            <TextInput 
                placeholder="Add a more detailed description..."
                value={description}
                onChange={(e) => this.updateDescription(e)}>
            </TextInput>
            <button onClick={onClose}>Close</button>
        </div>
    }

    updateDescription(e) {
        const { value } = e.target;

        this.props.onChangeCard(
            this.props.id,
            {
                description: value
            }
        )
    }
}