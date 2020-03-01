import React, { Component } from 'react';
import axios from 'axios';

import './Products.scss';
import ProductThumbnail from './../../components/ProductThumbnail/ProductThumbnail';

class Products extends Component {
  state = {
    categories: [],
    selectedCategoryId: null,
    products: []
  };

  async componentDidMount() {
    try {
      let categoryResp = await axios.get('/categories');
      let selectedCategoryId = categoryResp.data[0].id;
      let productsResp = await axios.get(
        '/products?categoryId=' + selectedCategoryId
      );
      this.setState({
        categories: categoryResp.data,
        selectedCategoryId,
        products: productsResp.data
      });
    } catch (error) {
      console.log('Error fetching data from server');
    }
  }

  categoryChangeHandler = async event => {
    let selectedCategoryId = event.target.value;
    let productsResp = await axios.get(
      '/products?categoryId=' + selectedCategoryId
    );
    this.setState({ selectedCategoryId, products: productsResp.data });
  };

  render() {
    let optionsJsx = this.state.categories.map(category => (
      <option value={category.id} key={category.id}>
        {category.name}
      </option>
    ));

    let productsJsx = this.state.products.map(product => (
      <ProductThumbnail product={product} key={product.id} />
    ));

    return (
      <div className="products-container">
        <header className="page-title">Product Listing Page</header>
        <div className="category-selection">
          <span>Category</span>
          <select onChange={this.categoryChangeHandler}>{optionsJsx}</select>
        </div>
        <div className="product-thumbnails-wrapper">{productsJsx}</div>
      </div>
    );
  }
}

export default Products;
