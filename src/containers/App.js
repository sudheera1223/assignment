import React, { Component } from 'react';
import '../styles/App.css';

import { connect } from 'react-redux';
import { requestProducts  }from '../actions/apiActions';

//components
import ProductGridContainer from './ProductGridContainer'
import Cart from '../components/Cart'

class App extends Component {
  componentDidMount() {
        this.props.requestProducts();
    }
  render() {
    return (
      <div className="App">
          <Cart cartCount={this.props.cart.length}/>
          <ProductGridContainer/>
      </div>
    );
  }
}

const stateToProps = state => ({
  cart: state.productsReducer.cart
})

const dispatchToProps = {
    requestProducts
}

export default connect(stateToProps,dispatchToProps)(App);
