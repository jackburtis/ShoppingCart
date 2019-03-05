import React, { Component } from 'react';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.scss';

class Shelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            products: []
        };
        this.products = [];
        this.js = this.props.js;
        this.onSizeChange = this.onSizeChange.bind(this);
    }
    addToCart = (product) => {
        let products = this.state.products;//this.state.products.slice();
       products.push(product);
       this.setState({products: products});
    }
    onSizeChange(e){
        const state = this.state;
        state.size = e.target.value;
        this.setState(state);
    }

  render() {
      const results = [];
      if (this.state.size !== '') {
          this.js.products.forEach((product) => {
              const size = product.size;
              console.log(size);
              console.log("state" + this.state.size)
              if (size.startsWith(this.state.size)) {
                  results.push(
                      <Product
                          prod={product}
                          addToCart={this.addToCart}
                      />
                  );
              }
          });
      }
      else {
      this.js.products.forEach((product) => {
          results.push(
              <Product
                  prod={product}
                  addToCart={this.addToCart}
              />
          );
      });
        }
      return(
      <div className="Shelf">
        <header className="Shelf-header">
            <div className="filter">
                Size:
                <input type="text" onChange={this.onSizeChange}/>
            </div>
          { results }
          <Cart products={this.state.products}/>
        </header>
      </div>
      );
  }
}

export default Shelf;
