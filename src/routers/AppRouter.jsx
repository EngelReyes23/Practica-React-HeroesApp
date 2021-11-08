import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import { DashboarRoutes } from "./DashboarRoutes";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Routes>
					{/* Para rutas no encontradas */}
					<Route path="*" element={<Navigate to="dashboard" />} />

					<Route path="/" element={<Navigate to="login" />} />
					<Route path="/dashboard/*" element={<DashboarRoutes />} />
					<Route path="/login" element={<LoginScreen />} />
				</Routes>
			</div>
		</Router>
	);
};

export default AppRouter;
