import {Publisher} from '../../data/heroes.d.js';
import {HeroList} from '../heroes/HeroList.js';
export const IndexScreen = () => {
	return (
		<div>
			<h1>Superheroes de {Publisher.All}</h1>
			<hr />
			<HeroList />
		</div>
	);
};
