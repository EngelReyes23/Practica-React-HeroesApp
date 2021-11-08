import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../auth/authContext";

const PrivateRoute = ({ children }) => {
	const {
		users: { logged },
	} = useContext(authContext);

	return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
