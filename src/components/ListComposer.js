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
                placeholder="Enter a title for this list">
            </input>
            <button 
                type="submit"
                onClick={(e) => this.createList(e)}>
                Add Card
            </button>
            <button 
                type="button"
                onClick={onCancel}>
                X
            </button>
        </form>
    }

    createList(e) {
        e.preventDefault();
        
        const title = this.inputRef.current.value;

        this.props.onCreate(title);

        this.props.onCancel();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
}