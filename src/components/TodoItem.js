import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/taskSlice";
import { Box, Button, Flex, Select, Input } from "@chakra-ui/react";

const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const removeTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    dispatch(updateTask({ id: id, status: newStatus }));
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask({ id: id, title: editedTitle, status: status }));
    setEditing(false);
  };

  return (
    <Box className="task-item" py={2} borderBottom="1px solid #ddd">
      <Flex align="center" justify="space-between">
        {editing ? (
          <Input
            value={editedTitle}
            onChange={handleTitleChange}
            size="sm"
            autoFocus
          />
        ) : (
          <div style={{ textDecoration: status === "completed" ? "line-through" : "none" }}>{title}</div>
        )}
        <Flex align="center">
          {editing ? (
            <Button colorScheme="green" variant="outline" size="sm" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <>
              <Select
                value={status}
                onChange={handleStatusChange}
                variant="outline"
                size="sm"
                mr={2}
              >
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
              </Select>
              <Button colorScheme="blue" variant="outline" size="sm" onClick={handleEdit}>
                Edit
              </Button>
            </>
          )}
          <Button colorScheme="red" variant="outline" size="sm" onClick={removeTask}>
            Delete
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoItem;
