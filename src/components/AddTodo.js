import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { Input, Button, Flex } from "@chakra-ui/react";

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding!!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value
      })
    );

    setValue("");
  };

  return (
    <Flex align="center" justify="center" direction="column" my={4}>
      <Input
        type="text"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        mb={2}
        w="300px"
      />

      <Button colorScheme="blue" onClick={onSubmit}>
        Save
      </Button>
    </Flex>
  );
};

export default AddTodo;
