import React, { Component } from 'react';

import Basket from './components/Basket';
import Filter from './components/Filter';
import Products from './components/Products';
import './App.css';

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem("cartItems")) });
    }
  }

  render() {
    return (
      <div className="container" >
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            {/* <Filter /> */}
            <Filter />
            <hr />
            <Products />
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
