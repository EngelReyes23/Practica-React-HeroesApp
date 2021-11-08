import React, { useMemo } from "react";
import { getHeroByPublisher } from "../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

const HeroesList = React.memo(({ publisher }) => {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

	return (
		<div className="card-columns">
			<div className="d-flex flex-wrap justify-content-evenly">
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</div>
	);
});

export default HeroesList;
