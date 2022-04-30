import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
	user: IUser;
	changeUrl: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, changeUrl }) => {
	return (
		<div onClick={() => changeUrl(user)} style={{ padding: 15, border: '2px solid coral' }}>
			{user.id}. {user.name} проживает в городе {user.address.city} на улице{' '}
			{user.address.street}
		</div>
	);
};

export default UserItem;
