// Action pour ajouter une tâche
export const addTodo = (todo) => {
    return {
      type: 'ADD_TODO',
      payload: todo,
    };
  };
  
  // Action pour basculer l'état de complétion d'une tâche
  export const toggleTodo = (todoId) => {
    return {
      type: 'TOGGLE_TODO',
      payload: todoId,
    };
  };
  
  // Action pour supprimer une tâche
  export const deleteTodo = (todoId) => {
    return {
      type: 'DELETE_TODO',
      payload: todoId,
    };
  };
  
  // Action pour éditer le titre d'une tâche
  export const editTodo = (todoId, newTitle) => {
    return {
      type: 'EDIT_TODO',
      payload: {
        id: todoId,
        newTitle: newTitle,
      },
    };
  };
  
  // Action pour réinitialiser la liste de tâches
  export const resetTodos = () => {
    return {
      type: 'RESET_TODOS',
    };
  };
  