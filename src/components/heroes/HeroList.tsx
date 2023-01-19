import {useMemo} from "react";
import {getHeroByPublisher} from "../../helpers/getHeroByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}: {publisher: string}) => {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

	return (
		<div className="row animate__animated animate__fadeIn animate__faster">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};
