import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shirt from '../images/5619496040738316_1.jpg';
import ProductText from './ProductText.js'
import '../App.css';

class Product extends Component {
  render() {
    return (
      <div className= "shelf-item-1">
          <img src={ shirt } className = "shelf-item-img"alt="logo" />
          <ProductText 
            prodName = { this.props.prod.title } 
            price = { this.props.prod.price }
            />
      </div>
    );
  }
}

export default Product;
