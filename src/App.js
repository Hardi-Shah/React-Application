import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/reactdemo/Greet';
import { Welcome } from './components/reactdemo/Welcome';
import { Hello } from './components/reactdemo/Hello';
import { Message } from './components/reactdemo/Message';
import Counter from './components/reactdemo/Counter';
import { FunctionClick } from './components/reactdemo/FunctionClick';
import  ClassClick  from './components/reactdemo/ClassClick';
import { EventBind } from './components/reactdemo/EventBind';
import { ParentComponent } from './components/reactdemo/ParentComponent';
import { UserGreeting } from './components/reactdemo/UserGreeting';
import { NameList } from './components/reactdemo/NameList';
import { StyleSheet } from './components/reactdemo/StyleSheet';
import Inline from './components/reactdemo/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/reactdemo/Form';
import LifeCycleA from './components/reactdemo/LifeCycleA';
import FragmentDemo from './components/reactdemo/FragmentDemo';
import Table from './components/reactdemo/Table';
import ParentComp from './components/reactdemo/ParentComp';
import RefsDemo from './components/reactdemo/RefsDemo';
import FocusInput from './components/reactdemo/FocusInput';
import PortalDemo from './components/reactdemo/PortalDemo';
import Hero from './components/reactdemo/Hero';
import ErrorBoundary from './components/reactdemo/ErrorBoundary';
import ClickCounter from './components/reactdemo/ClickCounter';
import HoverCounter from './components/reactdemo/HoverCounter';
import { Component } from 'react';
import ComponentC from './components/reactdemo/ComponentC';
import { UserProvider } from './components/reactdemo/userContext';
import { PostList } from './components/reactdemo/PostList';
import { PostForm } from './components/reactdemo/PostForm';

import HookCounter from './components/hooks/HookCounter';
import HookCounterTwo from './components/hooks/HookCounterTwo';
import HookCounterThree from './components/hooks/HookCounterThree';
import HookCounterFour from './components/hooks/HookCounterFour';
import UseEffectCounter from './components/hooks/UseEffectCounter';
import HookMouse from './components/hooks/HookMouse';
import MouseContainer from './components/hooks/MouseContainer';
import IntervalHookCounter from './components/hooks/IntervalHookCounter';
import DataFetching from './components/hooks/DataFetching';
import Componentc from './components/hooks/Componentc';
import CounterTwo from './components/hooks/CounterTwo';
import CounterOne from './components/hooks/CounterOne';
import DataFetchingOne from './components/hooks/DataFetchingOne';
import ParentHookComponent from './components/hooks/ParentHookComponent';
import CounterHook from './components/hooks/CounterHook';
import FocusInputRef from './components/hooks/FocusInputRef';
import HookTimer from './components/hooks/HookTimer';
import DocTitleone from './components/hooks/DocTitleOne';
import CustomCount from './components/hooks/CustomCount';
import UserForm from './components/hooks/UserForm';

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