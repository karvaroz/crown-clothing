import React, { useContext } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { ShopContext } from "../../context/shopContext";
import "./shopStyles/shopStyles.css";

const Shop = () => {
	const { products } = useContext(ShopContext);
	return (
		<div className="products-container">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Shop;
