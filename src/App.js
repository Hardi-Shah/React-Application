import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Implement/Greet';
import { Welcome } from './components/Implement/Welcome';
import { Hello } from './components/Implement/Hello';
import { Message } from './components/Implement/Message';
import Counter from './components/Implement/Counter';
import { FunctionClick } from './components/Implement/FunctionClick';
import  ClassClick  from './components/Implement/ClassClick';
import { EventBind } from './components/Implement/EventBind';
import { ParentComponent } from './components/Implement/ParentComponent';
import { UserGreeting } from './components/Implement/UserGreeting';
import { NameList } from './components/Implement/NameList';
import { StyleSheet } from './components/Implement/StyleSheet';
import Inline from './components/Implement/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Implement/Form';
import LifeCycleA from './components/Implement/LifeCycleA';
import FragmentDemo from './components/Implement/FragmentDemo';
import Table from './components/Implement/Table';
import ParentComp from './components/Implement/ParentComp';
import RefsDemo from './components/Implement/RefsDemo';
import FocusInput from './components/Implement/FocusInput';
import PortalDemo from './components/Implement/PortalDemo';
import Hero from './components/Implement/Hero';
import ErrorBoundary from './components/Implement/ErrorBoundary';
import ClickCounter from './components/Implement/ClickCounter';
import HoverCounter from './components/Implement/HoverCounter';
import { Component } from 'react';
import ComponentC from './components/Implement/ComponentC';
import { UserProvider } from './components/Implement/userContext';
import { PostList } from './components/Implement/PostList';
import { PostForm } from './components/Implement/PostForm';

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
import NotFound from './components/crudapp/pages/NotFound';

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
      <PostForm />  */}

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
          <Route exact path="/NotFound" component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}
export default App;