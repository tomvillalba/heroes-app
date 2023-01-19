import {heroes} from "../data/heroes.d.js";

export const getHeroByPublisher = (publisher: string) => {
	return heroes.filter((hero) => hero.publisher === publisher);
};
