import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../auth/authContext";
import { types } from "../../types/types";

const LoginScreen = () => {
	const context = useContext(authContext);
	const { dispatch } = context;

	const navigate = useNavigate();
	const handleClick = () => {
		const lastPath = localStorage.getItem("lastPath") || "/dashboard";

		dispatch({ type: types.login, payload: { name: "Engel" } });
		navigate(`${lastPath}`, { replace: true });
	};

	return (
		<div className="container mt-5">
			<h1>Login Screen</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleClick}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
