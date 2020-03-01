import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/products')
      .then(resp => this.setState({ products: resp.data }))
      .catch(error => console.log('Unable to fetch Products', error));
  }

  render() {
    let productsJsx = this.state.products.map(product => {
      return <h1 key={product.id}>{product.name}</h1>;
    });

    return (
      <div className="products-container">
        <h1>Products component loaded</h1>
        {productsJsx}
      </div>
    );
  }
}

export default Products;
