import React from "react";
import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboarRoutes = () => {
	return (
		<div>
			<Navbar />

			<div className="container mt-3">
				<Routes>
					<Route path="/marvel" element={<MarvelScreen />} />
					<Route path="/dc" element={<DcScreen />} />
					<Route path="/heroe/:idHeroe" element={<HeroScreen />} />
				</Routes>
			</div>
		</div>
	);
};
