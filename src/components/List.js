import React from 'react';

import Card from './Card';
import CardComposer from './CardComposer';

import Drag from './Drag';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drafting: false
        };

        this.toggleDrafting = this.toggleDrafting.bind(this);
        this.handleItemDrop = this.handleItemDrop.bind(this);
    }

    render() {
        const { title, cards, onCreateCard } = this.props;

        return <Drag.Landing onDropItem={this.handleItemDrop}>
            <div className="box list">
                <h2>{ title }</h2>
                <div 
                    className="flex f-col">
                    { cards.map((card) => <Card key={card.id} {...card} />) }

                    { this.state.drafting ? 
                        <CardComposer 
                            onCancel={this.toggleDrafting}
                            onCreate={onCreateCard} /> :
                        <a className="linkish" href="#" onClick={this.toggleDrafting}>+Add another card</a>
                    }
                </div>
            </div>
        </Drag.Landing>
    }

    toggleDrafting(e) {
        e && e.preventDefault();

        this.setState((prev) => ({
            drafting: !prev.drafting
        }))
    }

    handleItemDrop(type, data) {
        if (type === 'card') {
            this.props.onMoveCard(data.id, this.props.id);
        }
    }
}