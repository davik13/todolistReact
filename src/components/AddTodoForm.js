import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={todoTitle}
        onChange={handleInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTodoForm;
