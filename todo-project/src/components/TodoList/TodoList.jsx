import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '강의 듣기', status: 'active' },
    { id: 2, text: '운동 하기', status: 'active' },
    { id: 3, text: '책 읽기', status: 'active' },
  ]);
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
