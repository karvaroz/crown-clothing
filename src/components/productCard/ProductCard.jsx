import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import currencyFormatter from "../../helpers/currencyFormatter";
import Button from "../button/Button";

import "./productCardStyles/productCardStyles.css";

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img
				src={imageUrl}
				alt={name}
			/>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{currencyFormatter(price)}</span>
			</div>
			<Button
				buttonType="inverted"
				onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
