import {heroes} from "../data/heroes.d.js";

export const getHeroById = (id = "") => {
	return heroes.find((hero) => hero.id === id);
};
