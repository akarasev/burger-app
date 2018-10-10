import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

    componentWillUpdate() {
        console.log("[OrderSummary] will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return (
                    <li key={key}>
                        <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                    </li>
                )
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total:</strong> {this.props.total.toFixed(2)}</p>
                <p>Continue to purchase?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }

}

export default OrderSummary;