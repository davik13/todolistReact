import React, { useEffect } from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
 


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Box textAlign="center" maxW="500px" m="auto" mt={8}>
      <Heading as="h1" size="xl" mb={4}>
        My Tasks
      </Heading>
      <AddTodo />
      <TodoList />
    </Box>
  );
};

export default App;
