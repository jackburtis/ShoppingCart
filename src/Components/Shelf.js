import React, { Component } from 'react';
import logo from '../images/5619496040738316_1.jpg';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.css';

class Shelf extends Component {
  render() {
  	const p  = {
  	  "id": 12,
      "sku": "../images/5619496040738316_1.jpg",
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
  	}
  	const p2  = {
  	  "id": 12,
      "sku": "../images/8552515751438644_2.jpg",
      "title": "Other T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 14.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
  	}
    return (
      <div className="Shelf">
        <header className="Shelf-header">
          <Cart />
          <Product 
          prod = { p }
          />
          <Product 
          prod = { p2 }
          />
          <Product 
          prod = { p}
          />
          <Product 
          prod = { p2 }
          />
          <Product 
          prod = { p }
          />
        </header>
      </div>
    );
  }
}

export default Shelf;
