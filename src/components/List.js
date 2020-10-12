import React from 'react';

import Card from './Card';
import CardComposer from './CardComposer';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drafting: false
        };

        this.toggleDrafting = this.toggleDrafting.bind(this);
    }

    render() {
        const { title, cards, onCreateCard } = this.props;

        return <div className="box list">
            <h2>{ title }</h2>
            <div className="flex f-col">
                { cards.map((card, i) => <Card key={i} {...card} />) }

                { this.state.drafting ? 
                    <CardComposer 
                        onCancel={this.toggleDrafting}
                        onCreate={onCreateCard} /> :
                    <a className="linkish" href="#" onClick={this.toggleDrafting}>+Add another card</a>
                }
            </div>
        </div>
    }

    toggleDrafting(e) {
        e && e.preventDefault();

        this.setState((prev) => ({
            drafting: !prev.drafting
        }))
    }
}