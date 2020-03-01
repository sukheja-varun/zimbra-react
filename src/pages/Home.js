import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact render={() => <h1>Products</h1>} />
        <Route path="/product/:id" render={() => <h1>Product with Id</h1>} />
      </div>
    );
  }
}

export default Home;
