import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Welcome } from './components/Welcome';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import Counter from './components/Counter';
import { FunctionClick } from './components/FunctionClick';
import { ClassClick } from './components/ClassClick';
import { EventBind } from './components/EventBind';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { StyleSheet } from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { Component } from 'react';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import HookCounterThree from './hooks/HookCounterThree';
import HookCounterFour from './hooks/HookCounterFour';
import UseEffectCounter from './hooks/UseEffectCounter';
import HookMouse from './hooks/HookMouse';
import MouseContainer from './hooks/MouseContainer';
import IntervalHookCounter from './hooks/IntervalHookCounter';
import DataFetching from './hooks/DataFetching';
import Componentc from './hooks/Componentc';
import CounterTwo from './hooks/CounterTwo';
import CounterOne from './hooks/CounterOne';
import DataFetchingOne from './hooks/DataFetchingOne';
import ParentHookComponent from './hooks/ParentHookComponent';
import CounterHook from './hooks/CounterHook';
import FocusInputRef from './hooks/FocusInputRef';
import HookTimer from './hooks/HookTimer';
import DocTitleone from './hooks/DocTitleOne';
import CustomCount from './hooks/CustomCount';
import UserForm from './hooks/UserForm';


import Navbar from './components/crudapp/layout/Navbar';
import Home from './components/crudapp/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddTodo from './components/crudapp/todos/AddTodo';
import EditTodo from './components/crudapp/todos/EditTodo';
import Todo from './components/crudapp/todos/Todo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Greet name="abc">
        <p>Greet tag</p>
      </Greet>
      <Welcome name="abc" />
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <StyleSheet primary={true} />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form />
      <LifeCycleA />
      <FragmentDemo />
      <Table />
      <ParentComp />
      <RefsDemo />
      <FocusInput />
      <PortalDemo />
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ClickCounter name='vishwas' />
      <HoverCounter />
      <UserProvider value='vishwas'>
        <ComponentC />
      </UserProvider>
      <PostList />
      <PostForm /> */}

        {/* <HookCounter />
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <UseEffectCounter/>
       <HookMouse/> 
      <MouseContainer/> 
      <IntervalHookCounter/>
      <DataFetching/>
      <UserContext.Provider value={'vishwas'} >
        <ChannelContext.Provider value={'codeevolution'} >
          <Componentc />
        </ChannelContext.Provider>
      </UserContext.Provider>
       <CounterTwo /> 
      <CounterOne />
      <DataFetchingOne />
      <ParentHookComponent />
      <CounterHook />
      <FocusInputRef />
      <HookTimer/>
      <DocTitleone/>
      <CustomCount/>
      <UserForm/>*/}

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/add" component={AddTodo} />
          <Route exact path="/todos/edit/:id" component={EditTodo} />
          <Route exact path="/todos/:id" component={Todo} />
        </Switch>
      </div>
    </Router>

  );
}
export default App;