import React from 'react';

import './ProductThumbnail.scss';

const ProductThumbnail = props => {
  console.log(props);
  return (
    <article className="product-thumbnail-container">
      <img src={props.product.imageUrl} />
      <div className="product-name">{props.product.name}</div>
      <div>
        <button>See Details</button>
      </div>
    </article>
  );
};

export default ProductThumbnail;
