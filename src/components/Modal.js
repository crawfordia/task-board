import React from 'react';

export default ({ children, onClose }) => {
    return <div className="modal-container">
        { children }
    </div>
}