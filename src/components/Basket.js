import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import util from '../util';

class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info" >
        <h1 style={{ margin: "0", padding: "0" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? "Cart is empty" : <div> <b style={{ color: "blue" }}>{cartItems.length}</b> products in cart. <br /><br /></div>}
        {cartItems.length > 0 &&
          <div>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {cartItems.map(item =>
                <li>
                  <button className="btn btn-danger"
                    onClick={() => this.props.removeFromCart(this.props.cartItems, item)}
                  >
                    X
                  </button>
                  <b>{" "}{item.title}</b>
                  {" "}X {item.count} = {util.formatCurrency(item.price * item.count)}
                </li>
              )}
            </ul>
            <br />
            <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</b>
            <br /><br />
            <button className="btn btn-primary" onClick={() => alert("to be implemented...")}>
              Check out
            </button>
          </div>
        }
      </div >
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
})

export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);