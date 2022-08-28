import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import CartIcon from "../../components/CartIcon/CartIcon";

import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";

import { signOutUser } from "../../utils/firebase/firebase";

import "./navigationStyle/navigation.styles.css";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<>
			<div className="navigation">
				<Link
					className="logo-container"
					to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link
						className="nav-link"
						to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span
							className="nav-link"
							onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link
							className="nav-link"
							to="/authentication">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
