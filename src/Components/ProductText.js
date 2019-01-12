import React, { Component } from 'react';
import '../App.scss';

class ProductText extends Component {
  render() {
    return (
      <div className="Product">
          <p>{this.props.prodName}</p>
          <span className="price" >${this.props.price} </span>
      </div>
    );
  }
}

export default ProductText;
