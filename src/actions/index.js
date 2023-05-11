import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    EDIT_TODO,
    CLEAR_ALL_TODO,
    MARK_COMPLETED
} from './actionType';

export const addTodo = (todo) => {
    return {
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        title: todo?.title,
        description: todo?.description,
      },
    };
  };

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
         id
    }
}

export const updateTodo = (id,todo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            todoId: id,
            todoTitle: todo?.title,
            todoDescription: todo?.description,
          },
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
        },
        isedit: true,
    }
}

export const clearAllTodo = () => {
    return {
        type: CLEAR_ALL_TODO,
    }
}

export const markCompleted = (id) => {
    return {
        type: MARK_COMPLETED,
        payload: {
            selectedTodoId: id,
        },
    }
}