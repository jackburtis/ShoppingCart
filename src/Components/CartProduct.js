import React, { Component } from 'react';
import ProductText from "./ProductText.js";
import '../App.scss';


class CartProduct extends Component {


  render() {
    const { product, removeProduct } = this.props;

    const classes = ['shelf-item'];

    return (
      <div >
        <div
          className="cart-item__del"
          onClick={() => removeProduct(product)}
        >
        </div>
        <div className="cart-item">
            <img src={ require( "/Users/jackburtis/Documents/EECS394/new-shopping-cart/src/images/" + this.props.product.sku + "_1.jpg" )} className = "cart-item__img" alt="ShirtImage" />
            <p className="title">{product.title} Price:
                {product.price}</p>
        </div>
      </div>
    );
  }
}

export default CartProduct;
