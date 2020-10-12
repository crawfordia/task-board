import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        const { onCancel } = this.props;

        return <form>
            <input 
                type="text" 
                className="box"
                ref={this.inputRef}
                placeholder="Enter a title for this card">
            </input>
            <button 
                type="submit"
                onClick={(e) => this.createCard(e)}>
                Add Card
            </button>
            <button 
                type="button"
                onClick={onCancel}>
                X
            </button>
        </form>
    }

    createCard(e) {
        e.preventDefault();
        
        const title = this.inputRef.current.value;

        this.props.onCreate({
            title
        });

        this.props.onCancel();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
}