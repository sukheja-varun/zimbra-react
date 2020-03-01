import React, { Component } from 'react';
import axios from 'axios';

import './ProductDetails.scss';

class ProductDetails extends Component {
  state = {
    product: null,
    categoryName: ''
  };

  componentDidMount() {
    let productId = this.props.match.params.id;
    this.fetchProductById(productId);
  }

  fetchProductById(productId) {
    if (productId) {
      axios
        .get('/products/' + productId)
        .then(resp => {
          this.setState({ product: resp.data });
          this.fetchCategoryById(resp.data.categoryId);
        })
        .catch(error =>
          console.log('Error fetching product details from server')
        );
    }
  }

  fetchCategoryById(categoryId) {
    axios
      .get('/categories/' + categoryId)
      .then(resp => {
        this.setState({ categoryName: resp.data.name });
      })
      .catch(error =>
        console.log('Error fetching category details from server')
      );
  }

  render() {
    if (!this.state.product) {
      return <h3>Loading...</h3>;
    }
    return (
      <article className="product-details-container">
        <header className="page-title">Product Details Page</header>
        <div className="body">
          <div className="product-image-container">
            <img src={this.state.product.imageUrl} alt={this.state.product.name} />
          </div>
          <div className="product-description">
            <div className="text">
              <h2>Category Name:</h2>
              <h3>{this.state.categoryName}</h3>
            </div>
            <div className="text">
              <h2>Product Name:</h2>
              <h3>{this.state.product.name}</h3>
            </div>
            <div className="text">
              <h2>Product Description:</h2>
              <h3>{this.state.product.description}</h3>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default ProductDetails;
