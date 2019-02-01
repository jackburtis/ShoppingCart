import React, { Component } from 'react';
import ProductText from "./ProductText.js";
import '../App.scss';


class CartProduct extends Component {
  /*static propTypes = {
    product: PropTypes.object.isRequired,
  };
*/
  render() {
    const { product } = this.props;

    const classes = ['shelf-item'];

    return (
      <div >
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
       //   onClick={() => removeProduct(product)}
        />
        <div className="cart-item">
          <p className="title">{product.title}</p>
            <img src={ require( "/Users/jackburtis/Documents/EECS394/new-shopping-cart/src/images/" + this.props.product.sku + "_1.jpg" )} className = "shelf-item-img" alt="ShirtImage" />
            <ProductText
                prodName = { this.props.product.title }
                price = { this.props.product.price }
            />
        </div>
        <div className="shelf-item__price">
        </div>
      </div>
    );
  }
}

export default CartProduct;
