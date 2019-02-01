import React, {Component} from 'react';
import '../App.scss';
import CartProduct from './CartProduct.js';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.products = this.props.products;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.products !== this.props.products) {
            this.addProduct(nextProps.products);
        }

        if (nextProps.productToRemove !== this.props.productToRemove) {
            this.removeProduct(nextProps.productToRemove);
        }
    }

    openFloatCart = () => {
        this.setState({open: true});
    };

    closeFloatCart = () => {
        this.setState({open: false});
    };

    addProduct = product => {
        //   const { cartProducts, updateCart } = this.props;
        const cartProducts = this.props;
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

        // updateCart(cartProducts);
        this.openFloatCart();
    };
    /**/
    removeProduct = product => {
        const {cartProducts, updateCart} = this.props;

        const index = cartProducts.findIndex(p => p.id === product.id);
        if (index >= 0) {
            cartProducts.splice(index, 1);
            updateCart(cartProducts);
        }
    };

    render() {

        const cartProducts = this.props.products;

        const products = cartProducts.map(p => {
            return (
            //    <CartProduct product={p} removeProduct={removeProduct} key={p.id}/>
                <CartProduct product={p}/>
            );
        });
        if (this.state.open) {
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
                    {products}
                </div>
            );
        } else {
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

const mapStateToProps = state => ({
    cartProducts: state.cart.products,
    newProduct: state.cart.productToAdd,
    productToRemove: state.cart.productToRemove,
    cartTotal: state.total.data
});
export default Cart;
