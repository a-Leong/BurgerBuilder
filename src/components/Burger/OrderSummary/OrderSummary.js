import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const igStyle = { textTransform: 'capitalize'};
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(
                <li key={igKey}>
                    <span style={igStyle}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        } );
    return (
        <Aux>
            <h3>Your Burger:</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType='Danger'
                clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button
                btnType='Success'
                clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;