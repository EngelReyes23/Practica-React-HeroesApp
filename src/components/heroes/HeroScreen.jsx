import React, { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { heroImages } from "../../helpers/imgs";
import { getHeroeById } from "../selectors/getHeroById";
// import batman from "../../assets/heroes/dc-batman.jpg"; // recurso estatico

const HeroScreen = () => {
	const { idHeroe } = useParams();
	const heroe = useMemo(() => getHeroeById(idHeroe), [idHeroe]);
	const navigate = useNavigate();

	if (!heroe) return <Navigate to="/" />;

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		heroe;

	return (
		<div className="row m-5">
			<div className="col-4">
				<img
					className="img-thumbnail animate__animated animate__slideInLeft"
					// src={`../../assets/heroes/${idHeroe}.jpg`} // From public
					// src={batman} // from imports
					src={heroImages(`./${idHeroe}.jpg`).default} // from require
					alt="SuperHero"
				/>
			</div>
			<div className="col-8">
				<h3 className="text-center">
					<u>{superhero}</u>
				</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Publisher:</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>Alter ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>First appearance:</b> {first_appearance}
					</li>
				</ul>
				<h5>Characters</h5>
				<p>{characters}</p>
				<button
					className="btn btn-outline-info"
					onClick={() => {
						navigate(-1);
					}}
				>
					Back
				</button>
			</div>
		</div>
	);
};

export default HeroScreen;
