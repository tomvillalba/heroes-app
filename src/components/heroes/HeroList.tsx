import {useMemo} from 'react';
import {getHeroByPublisher} from '../../helpers/getHeroByPublisher';
import {HeroCard} from './HeroCard';
import {getAllHeroSorted} from '../../helpers/getAllHeroSorted';

export const HeroList = ({publisher = ''}) => {
	const heroes = useMemo(
		() => (publisher ? getHeroByPublisher(publisher) : getAllHeroSorted()),
		[publisher]
	);
	return (
		<div className="row animate__animated animate__fadeIn animate__faster">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};
