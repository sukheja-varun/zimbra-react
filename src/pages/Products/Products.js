import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  state = {
    categories: [],
    selectedCategory: null,
    products: []
  };

  async componentDidMount() {
    try {
      let categoryResp = await axios.get('http://localhost:3000/categories');
      let selectedCategory = categoryResp.data[0];
      let productsResp = await axios.get(
        'http://localhost:3000/products?categoryId=' + selectedCategory.id
      );
      this.setState({
        categories: categoryResp.data,
        selectedCategory,
        products: productsResp.data
      });
      console.log(this.state);
    } catch (error) {
      console.log('Error fetching data from server');
    }
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
