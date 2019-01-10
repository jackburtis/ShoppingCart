import React, { Component } from 'react';
import logo from '../images/5619496040738316_1.jpg';
import Product from './Product.js'
import Cart from './Cart.js'
import '../App.css';
import json from '../products.js'

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
      return(
      <div className="Shelf">
        <header className="Shelf-header">
          <Cart />
          <Product 
          prod = { json.products[0] }
          />
          <Product 
          prod = { json.products[1] }
          />
          <Product 
          prod = { json.products[2] }
          />
          <Product 
          prod = { json.products[3] }
          />
          <Product 
          prod = { json.products[4] }
          />
          <Product 
          prod = { json.products[5] }
          />
          <Product 
          prod = { json.products[6] }
          />
          <Product 
          prod = { json.products[7] }
          />
          <Product 
          prod = { json.products[8] }
          />
		<Product
          prod = { json.products[9] }
          />
          <Product 
          prod = { json.products[10] }
          />
          <Product 
          prod = { json.products[11] }
          />
          <Product 
          prod = { json.products[12] }
          />
          <Product 
          prod = { json.products[13] }
          />
          <Product 
          prod = { json.products[14] }
          />
          <Product 
          prod = { json.products[15] }
          />
          <Product 
          prod = { json.products[16] }
          />
        </header>
      </div>
      );
  }
}

export default Shelf;
