import React from 'react';

import TextInput from './TextInput';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }

        this.setTitle = this.setTitle.bind(this);
        this.create = this.create.bind(this);
    }

    render() {
        const { onCancel, creates } = this.props;

        return <form>
            <TextInput 
                type="text" 
                autoFocus={true}
                onChange={this.setTitle}
                placeholder={`Enter a title for this ${creates.toLowerCase()}`}>
            </TextInput>
            <button 
                type="submit"
                onClick={this.create}>
                {`Add ${creates}`}
            </button>
            <button 
                type="button"
                onClick={onCancel}>
                X
            </button>
        </form>
    }

    setTitle(e) {
        const { value: title } = e.target;

        this.setState(() => ({
            title
        }));
    }

    create(e) {
        e.preventDefault();
        
        const title = this.state.title.trim();

        if (title.length > 0) {
            this.props.onCreate({
                title
            });
    
            this.props.onCancel(); 
        }
    }
}