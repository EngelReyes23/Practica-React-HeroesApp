import { heroes } from "../../data/heroes";

export const getHeroesByName = (superhero = "") => {
	return superhero.length === 0
		? []
		: heroes.filter((hero) =>
				hero.superhero.toLowerCase().includes(superhero.toLowerCase())
		  );
};
