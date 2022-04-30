import React, { FC, useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

interface UserItemPageParams {
	[index: string]: string; // какая-то странная штука, что-то обновилось в 6 роутере и надо писать именно так
}

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const navigate = useNavigate()
	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users/' + params.id
			);
			setUser(response.data);
		} catch (e) {
			alert('Failed to fetch users');
		}
	}

	return (
		<div>
			<button onClick={() => navigate('/users')}>Back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>{user?.email}</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	);
};

export default UserItemPage;
