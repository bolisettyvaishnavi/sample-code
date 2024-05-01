import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button2 from './Button2';
import Button from './Button';
import Mounting from './Mounting';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import UseStateExamples from './components/UseStateExamples';
import Login from './components/Login';
import Test from './test';
import Task from "./basics/arrays/task"
import Task2 from "./basics/arrays/task2"
import MeeshoProducts from "./basics/arrays/MeeshoProducts"

// import { UseStateExamples } from './components/UseStateExamples';
function App() {
  let hello=<h1>welcome</h1>
  let hello1=React.createElement('h1',null,'hi vyshu')
  const location=window.location.pathname
  return (
    <div className="App">
      {/* <UseStateExamples/> */}
      {/* {hello1} */}
      {/* <Button2></Button2>
      <Button></Button>
      <Mounting/> */}
      {/* <Header/> */}
      <Test title={'click here'}/>
      <Task/>
      <MeeshoProducts/>
      <Task2/>
      {/* <Login/> */}
      {/* <Route>
        <h1>hi</h1>
        </Route> */}
      {/* {location=='/navbar'  &&  <Navbar/>}
      {location=='/home'  && <Home/>} */}
    </div>
  );
}

export default App;
