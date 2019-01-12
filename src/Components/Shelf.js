import React, { Component } from 'react';
import logo from '../images/5619496040738316_1.jpg';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.scss';

class Shelf extends Component {
  render() {
      const results = [];
      this.props.js.products.forEach((product) => {
        results.push(
          <Product 
          prod = { product }
          />
          );
          });
      return(
      <div className="Shelf">
        <header className="Shelf-header">
          { results }
          <Cart />
        </header>
      </div>
      );
  }
}

export default Shelf;
