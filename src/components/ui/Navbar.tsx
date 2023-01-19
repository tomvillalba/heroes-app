import React, {useContext, useState} from 'react';
import {Link, NavLink, useNavigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../auth/authContext';
import {types} from '../../types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar_B from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Navbar = () => {
	const {user, dispatch} = useContext(AuthContext);
	const navigate = useNavigate();
	const [search, setSearch] = useState('');

	const location = useLocation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`search/?q=${search}`);
		setSearch('');
	};

	const handleLogout = (): void => {
		dispatch({
			type: types.logout,
		});

		navigate('/login', {replace: true});
	};

	return (
		<Navbar_B
			collapseOnSelect
			expand="md"
			bg="dark"
			variant="dark"
			sticky="top">
			<Container>
				<Navbar_B.Brand>
					<Link className="navbar-brand" to="/">
						SuperHeroes
					</Link>
				</Navbar_B.Brand>
				<Navbar_B.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar_B.Collapse
					id="responsive-navbar-nav"
					className="d-md-flex justify-content-between">
					<Nav>
						<NavLink className="nav-item nav-link me-2 me-sm-0" to="/marvel">
							Marvel
						</NavLink>
						<NavLink className="nav-item nav-link " to="/dc">
							DC
						</NavLink>
					</Nav>

					<Nav>
						{!location.pathname.includes('/search') && (
							<div className="navbar-nav">
								<form
									className="nav-item nav-link"
									style={{minWidth: '35vw'}}
									onSubmit={handleSubmit}>
									<input
										className="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
										onChange={(e) => setSearch(e.target.value)}
									/>
								</form>
							</div>
						)}
					</Nav>
					<Nav className="account">
						<NavDropdown title={user.name} id="collasible-nav-dropdown salir">
							<NavDropdown.Item>Mi cuenta</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={handleLogout}>Salir</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar_B.Collapse>
			</Container>
		</Navbar_B>
	);
};
