import React from 'react'
import './Products.css';
import ProductCard from '../../productCard/ProductCard';
import { useDispatch } from 'react-redux';

const Products = ({products}) => {
    
  return (
    <div className="products-ctn">
      <div className="products-wrap">
        <div className="product-card">
          <h3>Shopping Everyday</h3>
          <div className="line"></div>
          <p className="details">
            We offer a range of cult favourites in premium denims, authentic
            fits and vintage washes. Inspired by heritage designs and emerging
            trends, BDG’s workwear aesthetic features denim and casual
            fabrications in jeans, pants, jackets and shorts, paired back with
            laundered jersey essentials.
          </p>
        </div>
      </div>
      <div className="products_box wrapper">
        {products.map((item) => {
          return <ProductCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
}

export default Products;