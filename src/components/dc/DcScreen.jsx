import React from "react";
import HeroesList from "../heroes/HeroesList";

const DcScreen = () => {
	return (
		<div>
			<h1 className="text-center">DC Screen</h1>
			<hr />
			<HeroesList publisher="DC Comics" />
		</div>
	);
};

export default DcScreen;
