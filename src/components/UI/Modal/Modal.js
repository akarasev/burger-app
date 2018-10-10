import React from 'react';

import styles from './Modal.module.css';

const modal = (props) => (
    <div
        className={styles.Modal}
        style={{
            transform: props.show ? 'translate(0)' : "translate(-100vh)",
            opasity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;