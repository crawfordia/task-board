import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    render() {
        return <input ref={this.input} type="text" {...this.props}></input>
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.input.current.focus();
        }
    }
}