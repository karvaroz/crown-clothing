import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CartProvider } from "./context/cartContext";
import { ShopProvider } from "./context/shopContext";
import { UserProvider } from "./context/userContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ShopProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ShopProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
