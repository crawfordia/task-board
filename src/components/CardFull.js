import React from 'react';

const style = {
    maxWidth: '700px',
    margin: '3rem auto',
    background: 'white'
}

export default ({ title, onClose }) => {
    return <div className="box" style={style}> 
        <h2>{ title }</h2>
        <button onClick={onClose}>Close</button>
    </div>
}