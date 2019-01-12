import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductText from './ProductText.js'
import '../App.scss';

class Product extends Component {
  render() {
        return (
      <div className= "shelf-item-1">
          <img src={ require( "/Users/jackburtis/Documents/EECS394/new-shopping-cart/src/images/" + this.props.prod.sku + "_1.jpg" )} className = "shelf-item-img" alt="ShirtImage" />
          <ProductText 
            prodName = { this.props.prod.title } 
            price = { this.props.prod.price }
            />
          <button className="button" >Add to cart</button>
      </div>
    );
  }
}

export default Product;
