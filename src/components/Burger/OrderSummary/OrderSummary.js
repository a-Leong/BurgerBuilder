import React from 'react';
import Aux from '../../../hoc/Aux';

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
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;