import React from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translate(0)' : "translate(0, -100vh)",
                opasity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;