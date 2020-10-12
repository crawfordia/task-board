import React from 'react';

import Board from './components/Board';

import dummyBoard from './dummyBoard';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Board {...dummyBoard} />
        </div>
    }
}