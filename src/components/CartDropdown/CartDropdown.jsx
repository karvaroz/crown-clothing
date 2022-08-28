import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";

import "./cartDropdownStyles/cartDropdownStyles.css";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate("checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
			<Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
