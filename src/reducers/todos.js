const initialState = [
    { id: 1, title: 'Faire les courses', completed: false },
    { id: 2, title: 'Faire du sport', completed: true },
  ];
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'TOGGLE_TODO':
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      case 'EDIT_TODO':
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.newTitle }
            : todo
        );
      case 'RESET_TODOS':
        return initialState;
      default:
        return state;
    }
  };
  
  export default todosReducer;
  