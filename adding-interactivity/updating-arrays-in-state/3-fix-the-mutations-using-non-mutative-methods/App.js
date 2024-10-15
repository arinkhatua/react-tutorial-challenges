import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
	{ id: 0, title: 'Buy milk', done: true },
	{ id: 1, title: 'Eat tacos', done: false },
	{ id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
	const [todos, setTodos] = useState(
		initialTodos
	);

	function handleAddTodo(title) {
		const nextTodos = [
			...todos,
			{
				id: nextId++,
				title,
				done: false
			}
		];
		setTodos(nextTodos);
	}

	function handleChangeTodo(nextTodo) {
		const nextTodos = todos.map(todo => {
			if (todo.id === nextTodo.id) return nextTodo;
			else return todo;
		});
		setTodos(nextTodos);
	}

	function handleDeleteTodo(todoId) {
		const nextTodos = todos.filter(todo => todo.id !== todoId);
		setTodos(nextTodos);
	}

	return (
		<>
			<AddTodo
				onAddTodo={handleAddTodo}
			/>
			<TaskList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</>
	);
}
