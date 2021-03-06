import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/imgs";

export const HeroCard = React.memo(
	({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
		console.log("Render");
		return (
			<div
				className="card mb-3 shadow animate__animated animate__zoomIn"
				style={{ maxWidth: "26rem" }}
			>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							// src={`../assets/heroes/${id}.jpg`} // from public folder
							src={heroImages(`./${id}.jpg`).default} // from src folder
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{publisher}</p>
							<p className="card-text">{alter_ego}</p>
							{alter_ego !== characters && (
								<p className="card-text">{characters}</p>
							)}

							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link
								className="btn btn-primary btn-block"
								to={`/dashboard/heroe/${id}`}
							>
								More...
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
);
