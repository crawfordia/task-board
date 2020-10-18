import React from 'react';

import Board from './components/Board';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Board />
        </div>
    }
}