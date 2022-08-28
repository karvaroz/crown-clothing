import React, { useContext } from "react";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { CartContext } from "../../context/cartContext";
import currencyFormatter from "../../helpers/currencyFormatter";

import "./checkoutStyles/checkoutStyles.css"

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Desc</span>
				</div>
				<div className="header-block">
					<span>Quant</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Total</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((cartItem) => (
				<CheckoutItem
					key={cartItem.id}
					cartItem={cartItem}
				/>
			))}
			<span className="total">Final Total: {currencyFormatter(cartTotal)}</span>
		</div>
	);
};

export default Checkout;
