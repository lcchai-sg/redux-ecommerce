import React, { Component } from 'react';
import util from '../util';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products, cartItems } = this.props;
    const productItems = products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`}
            onClick={() => this.props.addToCart(cartItems, product)}
          >
            <img src={`/products/${product.image}`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addToCart(cartItems, product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
})

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);