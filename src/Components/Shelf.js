import React, { Component } from 'react';
import logo from '../images/5619496040738316_1.jpg';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.css';

class Shelf extends Component {
  render() {
  	const p  = {
  	 "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "style": "Black with custom print",
      "price": 10.9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
      };
  	const p2  = {"id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "style": "Black with custom print",
      "price": 10.9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
      };
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
          <Cart />
          { results }
          <Product 
          prod = { this.props.js.products[0] }
          />
          <Product 
          prod = { this.props.js.products[1] }
          />
          <Product 
          prod = { this.props.js.products[2] }
          />
          <Product 
          prod = { this.props.js.products[3] }
          />
          <Product 
          prod = { this.props.js.products[4] }
          />
          <Product 
          prod = { this.props.js.products[5] }
          />
          <Product 
          prod = { this.props.js.products[6] }
          />
          <Product 
          prod = { this.props.js.products[7] }
          />
          <Product 
          prod = { this.props.js.products[8] }
          />
		<Product
          prod = { this.props.js.products[9] }
          />
          <Product 
          prod = { this.props.js.products[10] }
          />
          <Product 
          prod = { this.props.js.products[11] }
          />
          <Product 
          prod = { this.props.js.products[12] }
          />
          <Product 
          prod = { this.props.js.products[13] }
          />
          <Product 
          prod = { this.props.js.products[14] }
          />
          <Product 
          prod = { this.props.js.products[15] }
          />
          <Product 
          prod = { this.props.js.products[16] }
          />
        </header>
      </div>
      );
  }
}

export default Shelf;
