import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Products from './Products/Products';

class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" render={() => <h1>Product with Id</h1>} />
      </div>
    );
  }
}

export default Home;
