import React from 'react'
import './App.css';
import './appStyles.css'

import Demo from './components/Demo';
import  Formik  from './components/Formik';

import Navbar from './components/crudapp/layout/Navbar';
import Home from './components/crudapp/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddTodo from './components/crudapp/todos/AddTodo';
import EditTodo from './components/crudapp/todos/EditTodo';
import Todo from './components/crudapp/todos/Todo';
import NotFound from './components/crudapp/pages/NotFound';
import {theme,ThemeProvider} from '@chakra-ui/react'

function App() {
  return (
    // <Router>
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <Demo /> */}
      <Formik/>
      {/* <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/add" component={AddTodo} />
          <Route exact path="/todos/edit/:id" component={EditTodo} />
          <Route exact path="/todos/:id" component={Todo} />
          <Route exact path="/NotFound" component={NotFound} />
        </Switch> */}
    </div>
    </ThemeProvider>
    //</Router>
  );
}
export default App;