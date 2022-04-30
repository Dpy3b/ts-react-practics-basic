import React, { FC, useEffect, useState } from 'react';
import List from './List';
import axios from 'axios';
import { IUser } from '../types/types';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';
const UsersPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const navigate = useNavigate();
	// получаем пользователей при первом рендере страницы
	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			// указываем тип ответа на запрос, чтобы не было черного ящика
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users/'
			);
			setUsers(response.data);
		} catch (e) {
			alert('Failed to fetch users');
		}
	}

	return (
		<List
			items={users}
			/* принимает параметром одного пользователя типа IUser */
			renderItem={(user: IUser) => (
				<UserItem
					changeUrl={() => navigate('/users/' + user.id)}
					user={user}
					key={user.id}
				/>
			)}
		/>
	);
};

export default UsersPage;
