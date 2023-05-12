import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import { List, Select } from "@chakra-ui/react";

const TodoList = () => {
  const todos = useSelector((state) => state.tasks);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "all") {
      return true;
    } else if (activeFilter === "pending") {
      return todo.status === "pending";
    } else if (activeFilter === "inprogress") {
      return todo.status === "inprogress";
    } else if (activeFilter === "completed") {
      return todo.status === "completed";
    }
    return true;
  });

  return (
    <div>
      <Select value={activeFilter} onChange={handleFilterChange} mb={4}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="inprogress">In Progress</option>
        <option value="completed">Completed</option>
      </Select>
      <List className="tasks-list" my={4}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.name}
            status={todo.status}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
