import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodoForm from './Components/AddTodoForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Todo List</h1>
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
          <Route path="/add">
            <AddTodoForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
