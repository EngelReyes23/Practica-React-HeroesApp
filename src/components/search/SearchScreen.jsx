import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = () => {
	const [searchParams] = useSearchParams();

	const q = searchParams.get("q") || "";

	// useNavigate() es la actualizacion de History
	const navigate = useNavigate();

	// useState del formulario
	const [value, setValue] = useState({
		searchText: q,
	});

	const { searchText } = value;

	const heroesFiltered = getHeroesByName(q);

	const handleInputchange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<div className="m-auto">
			<h1 className="text-center text-primary">Search Screen</h1>
			<hr />

			<div className="container row">
				<div className="container col-4">
					<h4>Search Form</h4>
					<hr />
					<form action="" onSubmit={handleSubmitForm} autoComplete="off">
						<input
							onChange={handleInputchange}
							type="text"
							className="form-control"
							placeholder="Search Hero"
							value={searchText}
							name="searchText"
						/>
						<input
							type="submit"
							className="btn btn-primary mt-3"
							value="Search"
						/>
					</form>
				</div>
				<div className="col-8">
					<h4>Results ( {heroesFiltered.length} )</h4>
					{q === "" && (
						<div className="alert alert-info">
							<h4>Search a hero</h4>
						</div>
					)}

					{q !== "" && heroesFiltered.length === 0 && (
						<div className="alert alert-danger">
							<h4>No results found</h4>
						</div>
					)}

					{
						// itera sobre heroesFiltered y manda los datos a HeroCard
						heroesFiltered &&
							heroesFiltered.map((hero) => <HeroCard key={hero.id} {...hero} />)
					}
				</div>
			</div>
		</div>
	);
};
