import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
  render() {
    const { filteredProducts, products, size, sort, sortProducts, filterProducts } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          {filteredProducts.count} products found.
        </div>
        <div className="col-md-4">
          Order by
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              sortProducts(
                filteredProducts,
                e.target.value
              );
            }}
          >
            <option value="">Select</option>
            <option value="lowest">lowest to highest</option>
            <option value="highest">highest to lowest</option>
          </select>
        </div>
        <div className="col-md-4">
          Filter size
          <select
            className="form-control"
            value={size}
            onChange={(e) => {
              filterProducts(
                products,
                sort,
                e.target.value
              );
            }}
          >
            <option value="">Select</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filteredProducts: state.products.filteredItems,
  products: state.products.items,
  size: state.products.size,
  sort: state.products.sort,
})

export default connect(mapStateToProps, { filterProducts, sortProducts })(Filter);