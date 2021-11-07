import { heroes } from "../../data/heroes";

export const getHeroByPublisher = (publisher) => {
	// lista admitida
	const validPublisher = ["DC Comics", "Marvel Comics"];

	// validar publisher
	if (validPublisher.includes(publisher)) {
		return heroes.filter((hero) => hero.publisher === publisher);
	} else {
		throw new Error("Invalid publisher");
	}
};
