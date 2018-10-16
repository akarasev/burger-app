import React from 'react';

import styles from './CheckoutSummary.module.css'

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    console.log(props.ingredients);
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Thank you!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType={"Danger"}
                clicked={props.checkoutCanceled}>CANCEL</Button>
            <Button
                btnType={"Success"}
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;
