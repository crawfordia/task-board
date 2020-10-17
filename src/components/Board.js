import React from 'react';

import List from './List';
import ListComposer from './ListComposer';
import Modal from './Modal';

import Drag from './Drag';
import CardFull from './CardFull';

const selectListCards = (listId, cards) => {
    return cards.filter(card => card.listId === listId);
}

const selectCard = (cards, id) => {
    return cards.filter(card => card.id === id)[0];
}

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            lists: props.lists,
            cards: props.cards,
            drafting: false,
            focusedCard: null
        }

        this.toggleDrafting = this.toggleDrafting.bind(this);
        this.createList = this.createList.bind(this);
        this.moveCard = this.moveCard.bind(this);
        this.selectCard = this.selectCard.bind(this);
        this.deselectCard = this.deselectCard.bind(this);
        this.patchCard = this.patchCard.bind(this);
    }

    render() {
        const { title, lists, cards, focusedCard } = this.state;

        return <Drag.Scope>
            { this.state.focusedCard != null && 
                <Modal onClose={this.deselectCard}>
                    <CardFull 
                        onClose={this.deselectCard}
                        onChangeCard={this.patchCard}
                        {...selectCard(cards, focusedCard)}></CardFull>
                </Modal>
            }
            <h1>{ title }</h1>
            <div className="flex f-row">
                { lists.map((list) => {
                    return <List 
                        key={list.id} 
                        onCreateCard={(card) => this.addCardToList(list.id, card)}
                        onMoveCard={this.moveCard}
                        onSelectCard={this.selectCard}
                        {...list}
                        cards={selectListCards(list.id, cards)} />
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
        </Drag.Scope>
    }

    toggleDrafting(e) {
        e && e.preventDefault();

        this.setState((prev) => ({
            drafting: !prev.drafting
        }))
    }

    addCardToList(listId, card) {
        this.setState((prev) => ({
            cards: [
                ...prev.cards,
                {
                    id: prev.cards.length,
                    listId: listId,
                    ...card
                }
            ]
        }))
    }

    createList({ title }) {
        this.setState((prev) => ({
            lists: [
                ...prev.lists,
                {
                    id: prev.lists.length,
                    title
                }
            ]
        }));
    }

    moveCard(cardId, listId) {
        this.setState((prev) => ({
            cards: prev.cards.map(card => {
                if (card.id === cardId) {
                    return {
                        ...card,
                        listId
                    }
                } else {
                    return card;
                }
            })
        }));
    }

    selectCard(cardId) {
        this.setState(() => ({
            focusedCard: cardId
        }));
    }

    deselectCard() {
        this.setState(() => ({
            focusedCard: null
        }));
    }

    patchCard(id, changes) {
        this.setState((prev) => ({
            cards: prev.cards.map(card => {
                if (card.id === id) {
                    return {
                        ...card,
                        ...changes
                    }
                } else {
                    return card;
                }
            })
        }));
    }
}