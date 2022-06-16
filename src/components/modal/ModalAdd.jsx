import React from 'react';
import classes from './Modal.module.css'

const ModalAdd = ({children, visible, setVisible}) => {
    const rootClasses = [classes.MyModal]
    if (visible) {
        rootClasses.push(classes.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick = {() => setVisible()}>
            <div className={classes.MyModalContent} onClick = {(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalAdd;