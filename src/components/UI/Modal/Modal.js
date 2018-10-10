import React from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log("[Modal] will update");
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translate(0)' : "translate(0, -100vh)",
                        opasity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;