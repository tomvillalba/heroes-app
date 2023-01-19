import {heroes} from "../data/heroes.d.js";

export const getHeroesByName = (name = "") => {
	if (name.length === 0) return heroes;
	name = name.toLowerCase();
	return heroes.filter(
		(hero) =>
			hero.superhero.toLowerCase().includes(name) ||
			hero.characters.toLowerCase().includes(name)
	);
};
