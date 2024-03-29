import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component!
    componentDidUpdate() {
        console.log('[OrderSummary.js] did update')
    }

    render() {
        const igStyle = { textTransform: 'capitalize'};
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return(
                    <li key={igKey}>
                        <span style={igStyle}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            } );
        return (
            <Aux>
                <h3>Your Burger:</h3>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType='Danger'
                    clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseContinued}>
                    CONTINUE
                </Button>
            </Aux>
        );
    }
};

export default OrderSummary;