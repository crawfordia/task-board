import React from 'react';

import List from './List';
import ListComposer from './ListComposer';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            lists: props.lists,
            drafting: false
        }

        this.toggleDrafting = this.toggleDrafting.bind(this);
        this.createList = this.createList.bind(this);
    }

    render() {
        const { title, lists } = this.state;

        return <div>
            <h1>{ title }</h1>
            <div className="flex f-row">
                { lists.map((list, i) => {
                    return <List 
                        key={i} 
                        onCreateCard={(card) => this.addCardToList(i, card)}
                        {...list} />
                })}
                <div>
                    { this.state.drafting ? 
                        <ListComposer 
                            onCancel={this.toggleDrafting}
                            onCreate={this.createList} /> :
                        <a 
                            className="linkish" 
                            href="#" 
                            onClick={this.toggleDrafting}>
                                +Add another list
                            </a>
                    }
                </div>
            </div>
        </div>
    }

    toggleDrafting(e) {
        e && e.preventDefault();

        this.setState((prev) => ({
            drafting: !prev.drafting
        }))
    }

    addCardToList(listIndex, card) {
        this.setState((prev) => ({
            lists: prev.lists.map((list, index) => {
                if (index === listIndex) {
                    return {
                        ...list,
                        cards: [
                            ...list.cards,
                            card
                        ]
                    }
                }

                return list;
            })
        }))
    }

    createList(title) {
        this.setState((prev) => ({
            lists: [
                ...prev.lists,
                {
                    title,
                    cards: []
                }
            ]
        }));
    }
}