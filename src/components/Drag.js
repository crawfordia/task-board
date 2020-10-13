import React from 'react';

import preventDefault from '../preventDefault';

const Context = React.createContext();

export class Scope extends React.Component {
    constructor(props) {
        super(props);

        this.setDragTarget = (type, data) => {
            this.setState(() => ({
                type,
                data
            }));
        }
    
        this.clearDragTarget = () => {
            this.setState(() => ({
                type: null,
                data: null
            }))
        }

        this.state = {
            type: null,
            data: null,
            setTarget: this.setDragTarget,
            clearTarget: this.clearDragTarget
        }
    }

    render() {
        return <Context.Provider value={this.state}>
            { this.props.children }
        </Context.Provider>
    }
}

export const Item = ({ type, data, children }) => {
    return <Context.Consumer>
        {({ setTarget, clearTarget }) => {
            return <div 
                onDragStart={() => setTarget(type, data)}
                onDragEnd={() => clearTarget()}>
                { children }
            </div>
        }}
    </Context.Consumer>
}

export const Landing = ({ children, onDropItem }) => {
    return <Context.Consumer>
        {({ type, data }) => {
            return <div 
                onDragEnter={preventDefault}
                onDragOver={preventDefault}
                onDrop={() => onDropItem(type, data)}>
                { children }
            </div>
        }}
    </Context.Consumer>
}

export default {
    Scope,
    Item,
    Landing
}