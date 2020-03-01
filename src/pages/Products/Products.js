import React, { Component } from 'react';
import axios from 'axios';

import './Products.scss';
import ProductThumbnail from './../../components/ProductThumbnail/ProductThumbnail';

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
    let productsJsx = this.state.products.map(product => (
      <ProductThumbnail product={product} key={product.id} />
    ));

    return (
      <div className="products-container">
        <header className="page-title">Product Listing Page</header>
        {productsJsx}
      </div>
    );
  }
}

export default Products;
