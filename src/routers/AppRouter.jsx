import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import { DashboarRoutes } from "./DashboarRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Routes>
					{/* Para rutas no encontradas */}
					<Route path="*" element={<Navigate to="dashboard" />} />

					<Route path="/" element={<Navigate to="dashboard" />} />

					<Route
						path="/dashboard/*"
						element={
							<PrivateRoute>
								<DashboarRoutes />
							</PrivateRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<LoginScreen />
							</PublicRoute>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default AppRouter;
