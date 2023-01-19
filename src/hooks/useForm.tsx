import {useState} from 'react';

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	return [values, handleInputChange, reset];
};
