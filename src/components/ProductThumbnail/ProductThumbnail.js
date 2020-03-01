import React from 'react';
import { Link } from 'react-router-dom';

import './ProductThumbnail.scss';

const ProductThumbnail = props => {
  return (
    <article className="product-thumbnail-container">
      <img src={props.product.imageUrl} alt="product image" />
      <div className="product-name">{props.product.name}</div>
      <div>
        <Link to={'/product/' + props.product.id}>
          <button>See Details</button>
        </Link>
      </div>
    </article>
  );
};

export default ProductThumbnail;
