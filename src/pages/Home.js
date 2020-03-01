import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Products from './Products/Products';
import ProductDetails from './ProductDetails/ProductDetails';

class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
      </div>
    );
  }
}

export default Home;
