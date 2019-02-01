import React, { Component } from 'react';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.scss';

class Shelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.products = [];
        this.js = this.props.js;
    }
    addToCart = (product) => {
        let products = this.state.products;//this.state.products.slice();
       products.push(product);
       this.setState({products: products});
    }
  render() {
      const results = [];
      this.js.products.forEach((product) => {
        results.push(
          <Product 
          prod = { product }
          addToCart = {this.addToCart}
          />
          );
        console.log(product);
          });
      return(
      <div className="Shelf">
        <header className="Shelf-header">
          { results }
          <Cart products={this.state.products}/>
        </header>
      </div>
      );
  }
}

export default Shelf;
