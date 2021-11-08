import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../auth/authContext";

const PublicRoute = ({ children }) => {
	const {
		users: { logged },
	} = useContext(authContext);

	return !logged ? children : <Navigate to="/" />;
};

export default PublicRoute;
