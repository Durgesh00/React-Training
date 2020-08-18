import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet";
import productList from "./productList";
import ProductList from './components/ProductList'
import projectList from "./projectList";
import ProjectList from "./components/ProjectList"
import { Button } from 'reactstrap';
import LoginContainer from './containers/LoginContainer';


function App() {
  //console.log(projectList)
  return (
    <div className="App">
      <Greet name={" Durgesh"} />
      {/* {productList.map(product => <h3>{product.name}</h3>)} */}
      {/* <ProductList /> */}
      {/* <ProjectList /> */}
      <LoginContainer />
    </div>
  );
}

export default App;
