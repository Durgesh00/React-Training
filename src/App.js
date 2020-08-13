import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet";
import productList from "./productList";
import ProductList from './components/ProductList'
import projectList from "./projectList";
import ProjectList from "./components/ProjectList"
import { Button } from 'reactstrap';


function App() {
  //console.log(projectList)
  return (
    <div className="App">
      <Greet name={" Durgesh"} />
      {/* {productList.map(product => <h3>{product.name}</h3>)} */}
      {/* <ProductList /> */}
      <ProjectList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
