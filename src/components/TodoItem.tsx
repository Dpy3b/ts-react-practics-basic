import React, { FC } from 'react';
import { ITodo } from './../types/types';

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
	return (
		<div>
			{/* устанавливаем здесь реадОнли чтобы реакт не ругался что у нас неизменяемый чекбокс и нету onChange */}
			<input readOnly type="checkbox" checked={todo.completed} />
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;


