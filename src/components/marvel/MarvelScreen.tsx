import {HeroList} from '../heroes/HeroList';
import {Publisher} from '../../data/heroes.d.js';

export const MarvelScreen = () => {
	return (
		<div>
			<h1>Superheroes de {Publisher.MarvelComics}</h1>
			<hr />
			<HeroList publisher={Publisher.MarvelComics} />
		</div>
	);
};
