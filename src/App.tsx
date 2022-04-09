import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { IUser, ITodo } from './types/types';
import UserList from './components/UserList';
import List from './components/List';
import axios from 'axios';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventExample from './components/EventExample';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
const App = () => {
	/* const users:IUser[] = [
		{id: 1, name: 'Max', email: 'asd@mail.ru', address: {city:"moskow", street: 'lenina', zipcode: '12214'}},
		{id: 2, name: 'Amber', email: 'a1244sd@mail.ru', address: {city:"moskow", street: 'novaia', zipcode: '24523'}}
	] */
	return (
		<BrowserRouter>
			<div>
				<NavLink to="/users">Пользователи</NavLink>
				<NavLink to="/todos">Список дел</NavLink>
			</div>
			<Routes>
				<Route path="/users" element={<UsersPage />} />
				<Route path="/users/:id" element={<UserItemPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/todos/:id" element={<TodoItemPage />} />
			</Routes>
		</BrowserRouter>
	);
};
{
	/* <EventExample/>
			<Card
				onClick={num => console.log(`произошел клик + ${num} `)}
				variant={CardVariant.outlined}
				width="150px"
				height="150px"
			>
				<button>Кнопка</button>
				<div>Здарова</div>
			</Card> */
}

export default App;
