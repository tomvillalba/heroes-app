import {Publisher} from "../../data/heroes.d.js";

import {HeroList} from "../heroes/HeroList";

export const DcScreen = () => {
	return (
		<div>
			<h1>DcScreen</h1>
			<hr />
			<HeroList publisher={Publisher.DCComics} />
		</div>
	);
};
