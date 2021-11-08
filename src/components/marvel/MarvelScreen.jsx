import React from "react";
import HeroesList from "../heroes/HeroesList";

const MarvelScreen = () => {
	return (
		<div>
			<h1 className="text-center">Marvel Screen</h1>
			<hr />
			<HeroesList publisher="Marvel Comics" />
		</div>
	);
};

export default MarvelScreen;
