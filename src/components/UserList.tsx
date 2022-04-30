import React, { FC } from 'react';
import { IUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
	users: IUser[]; // список пользователей типа массив IUser
}

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<div>
			{/* {users.map(user => (
				<UserItem changeUrl={() => navigate('/users/' + user.id)} key={user.id} user={user}/>
			))} */}
		</div>
	);
};

export default UserList;
