import {Hero, Publisher} from "../../data/heroes.d.js";
import {Link} from "react-router-dom";
export const HeroCard = (hero: Hero) => {
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img
					src={`/assets/${hero.id}.jpg`}
					className="card-img "
					alt={hero.superhero}
				/>
				<div className="card-body">
					<h5 className="card-title">{hero.superhero}</h5>

					<p className="card-text" style={{height: "45px", overflow: "hidden"}}>
						{hero.characters}
					</p>

					<p className="card-text">
						<small className="text-muted">{hero.first_appearance}</small>
					</p>

					<Link
						to={`/hero/${hero.id}`}
						className={`btn ${
							hero.publisher === Publisher.MarvelComics
								? "btn-danger"
								: "btn-primary"
						}`}>
						More...
					</Link>
				</div>
			</div>
		</div>
	);
};
