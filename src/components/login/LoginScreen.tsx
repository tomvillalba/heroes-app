import {useNavigate} from 'react-router-dom';
import {types} from '../../types';
import {AuthContext} from '../../auth/authContext';
import {useContext, useState} from 'react';

export const LoginScreen = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const {dispatch} = useContext(AuthContext);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!name || name.length <= 2) return;

		dispatch({
			type: types.login,
			payload: {name: name},
		});

		navigate('/marvel', {replace: true});
	};

	return (
		<div className="container mt-5">
			<h1>LoginScreen</h1>
			<hr />
			<form className="row" onSubmit={handleLogin}>
				<div className="mb-2">
					<input
						type="text"
						placeholder="Escribe tu nombre"
						name="name"
						onChange={onInputChange}
					/>
				</div>
				<div>
					<button className="btn btn-primary" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
