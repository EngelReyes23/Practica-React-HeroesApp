import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../auth/authContext";

const PrivateRoute = ({ children }) => {
	const {
		users: { logged },
	} = useContext(authContext);

	const location = useLocation();

	localStorage.setItem("lastPath", location.pathname);

	return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
