import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigationStyle/navigation.styles.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


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
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
