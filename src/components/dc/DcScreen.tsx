import {Publisher} from '../../data/heroes.d.js';
import {HeroList} from '../heroes/HeroList';

export const DcScreen = () => {
	return (
		<div>
			<h1>Superheroes de {Publisher.DCComics}</h1>
			<hr />
			<HeroList publisher={Publisher.DCComics} />
		</div>
	);
};
