import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { IUser, ITodo } from './types/types';
import UserList from './components/UserList';
import List from './components/List';
import axios from 'axios';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventExample from './components/EventExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [todos, setTodos] = useState<ITodo[]>([])
	useEffect(() => {
		fetchUsers()
		fetchTodos()
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);<List items={todos}  renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
		} catch (e) {
			alert('Failed to fetch users');
		}
	}

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			setTodos(response.data);
		} catch (e) {
			alert('Failed to fetch users');
		}
	}

	/* const users:IUser[] = [
		{id: 1, name: 'Max', email: 'asd@mail.ru', address: {city:"moskow", street: 'lenina', zipcode: '12214'}},
		{id: 2, name: 'Amber', email: 'a1244sd@mail.ru', address: {city:"moskow", street: 'novaia', zipcode: '24523'}}
	] */
	return (
		<div>
			<EventExample/>
			<Card
				onClick={num => console.log(`произошел клик + ${num} `)}
				variant={CardVariant.outlined}
				width="150px"
				height="150px"
			>
				<button>Кнопка</button>
				<div>Здарова</div>
			</Card>
			<List
				items={users}
				renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
			/>
			<List
				items={todos}
				renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
};

export default App;
