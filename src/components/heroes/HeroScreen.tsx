import {useParams, Navigate, useNavigate} from "react-router-dom";
import {getHeroById} from "../../helpers/getHeroById";
import {useMemo} from "react";

export const HeroScreen = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(id), [id]);

	const handleReturn = () => {
		if (window.history.length > 2) {
			navigate(-1);
		} else {
			hero?.publisher.includes("DC") ? navigate("/dc") : navigate("/marvel");
		}
	};

	if (!hero) {
		return <Navigate to="/" />;
	}

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`/assets/${id}.jpg`}
					className="img-thumbnail animate__animated animate__fadeInLeft"
					alt={hero.superhero}
					style={{maxHeight: "80vh"}}
				/>
				<button className="btn btn-outline-info mt-2" onClick={handleReturn}>
					Volver
				</button>
			</div>
			<div className="col-8 animate__animated animate__fadeIn">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b> {hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {hero.publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance:</b> {hero.first_appearance}
					</li>
				</ul>

				<hr />

				<h4>Characters:</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">- {hero.characters}</li>
				</ul>
			</div>
		</div>
	);
};
