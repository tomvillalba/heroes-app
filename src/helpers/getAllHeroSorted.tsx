import {heroes} from '../data/heroes.d.js';

export const getAllHeroSorted = () => {
	return heroes.sort(() => Math.random() - 0.5);
};
