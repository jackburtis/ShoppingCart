import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

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
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
        </div>
        <div className="shelf-item__price">
          <p>{' ${formatPrice(product.price)'}</p>
        </div>
      </div>
    );
  }
}

export default CartProduct;
