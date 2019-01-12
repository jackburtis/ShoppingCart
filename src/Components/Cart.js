import React, { Component } from 'react';
import '../App.scss';

class Cart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {open: false};
   }
   
   componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }
  
   openFloatCart = () => {
    this.setState({ open: true });
  };
  
  closeFloatCart = () => {
    this.setState({ open: false });
  };
   
   addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    this.openFloatCart();
  };
  
  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };
  
  render() {
  	if(this.state.open){
    return (
    <div className="openCart">
      <div
            onClick={() => this.closeFloatCart()}
            className="openCart__close-btn"
          >
            X
          </div>
      
          <p>
          This is your cart
          </p>
      </div>
    );
    }
    else {
    return (
    <div className="closedCart">
      <span className="bag bag--float-cart-closed"
      onClick={() => this.openFloatCart()}
      > 
      </span>
          <p>
          This is your cart
          </p>
      </div>
    );
    }
  }
}

export default Cart;
