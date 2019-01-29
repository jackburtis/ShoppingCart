import React, { Component } from 'react';
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
        console.log(product);
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
