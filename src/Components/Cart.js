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
            console.log("adding product");
            this.addProduct(nextProps.products);
        }

        if (nextProps.productToRemove !== this.props.productToRemove) {
            console.log("removing product");
            this.removeProduct(nextProps.productToRemove);
        }
    }

    updateCart = (cartProducts) => {
        console.log("Here is the price:" + this.price);
        let sum = 0;
        cartProducts.forEach()(p => {
            sum += p.price;
            }
        )
        this.price = sum;
        console.log("Here is the price:" + this.price);
    }

    openFloatCart = () => {
        this.setState({open: true});
    };

    closeFloatCart = () => {
        this.setState({open: false});
    };

    addProduct = product => {
        const cartProducts = this.props;
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        });

        this.updateCart(cartProducts);
        if (!productAlreadyInCart) {
            cartProducts.push(product);
        }

        this.openFloatCart();
    };
    /**/
    removeProduct = product => {
        const cartProducts = this.props.products;
        const index = cartProducts.findIndex(p => p.id === product.id);
        if (index >= 0) {
            cartProducts.splice(index, 1);
            this.updateCart(cartProducts);
        }
        this.openFloatCart();
    };

    render() {

        const cartProducts = this.props.products;

        const products = cartProducts.map(p => {
            return (
            //    <CartProduct product={p} removeProduct={removeProduct} key={p.id}/>
                <CartProduct product={p} removeProduct = {this.removeProduct}/>
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
                        This is your cart:
                        Price: {this.price}
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
