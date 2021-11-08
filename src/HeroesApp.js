import React from "react";
import { useReducer } from "react";
import { authContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
	return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroesApp = () => {
	const [users, dispatch] = useReducer(authReducer, {}, init);
	console.log(users);

	return (
		<authContext.Provider value={{ users, dispatch }}>
			<AppRouter />
		</authContext.Provider>
	);
};

export default HeroesApp;
