import {useLocation, useNavigate} from "react-router-dom";
import {getHeroesByName} from "../../helpers/getHeroesByName";
import {useForm} from "../../hooks/useForm";
import {HeroCard2} from "../heroes/HeroCard2";
import queryString from "query-string";
import {useMemo} from "react";

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const {q = ""} = queryString.parse(location.search);

	const [values, handleInputChange] = useForm({searchText: q});

	// @ts-ignore
	const {searchText} = values;

	// @ts-ignore
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>Búsquedas</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Formulario de búsqueda</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Buscar un héroe"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							// @ts-ignore
							onChange={(e) => handleInputChange(e)}
						/>
						<button type="submit" className="btn m-1 btn-block btn-outline-primary">
							Buscar...
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Resultados</h4>
					<hr />
					{heroesFiltered.length ? (
						heroesFiltered.map((hero) => <HeroCard2 key={hero?.id} {...hero} />)
					) : (
						<div className="alert alert-danger">No se han encontrado resultados</div>
					)}
				</div>
			</div>
		</>
	);
};
