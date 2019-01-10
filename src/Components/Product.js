import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductText from './ProductText.js'
import '../App.css';

class Product extends Component {
  render() {
    return (
      <div className= "shelf-item-1">
          <img src={ "../images/" + this.props.prod.sku + "_1.jpg"} className = "shelf-item-img"alt="Shirt Image" />
          <ProductText 
            prodName = { this.props.prod.title } 
            price = { this.props.prod.price }
            />
          <button type="button">Add to cart</button>
      </div>
    );
  }
}

export default Product;
