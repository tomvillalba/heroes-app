import {useContext} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext, AuthContextProps} from '../../auth/authContext';
import {types} from '../../types';

export const Navbar = () => {
	const {user, dispatch} = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = (): void => {
		dispatch({
			type: types.logout,
		});

		navigate('/login', {replace: true});
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
			<Link className="navbar-brand" to="/">
				SuperHeroes
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link" to="/marvel">
						Marvel
					</NavLink>

					<NavLink className="nav-item nav-link" to="/dc">
						DC
					</NavLink>

					<NavLink className="nav-item nav-link" to="/search">
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-sm-end">
				<ul className="navbar-nav ml-auto d-flex align-items-center">
					<span className="nav-item nav-link text-info ">{user.name}</span>

					<button className="nav-item nav-link btn" onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
