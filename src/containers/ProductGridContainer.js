import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProducts  }from '../actions/apiActions';
import { addToCart, removeFromCart  } from '../actions/cartActions'

import ProductCard from '../components/ProductCard'

class ProductGridContainer extends Component {
  render() {
    return (
      <div className='main-list-contn'>
        {
          this.props.products.map((eachItem,i)=>{
            return (
              <div className='list-contn' key={eachItem.dpci}>
                  <ProductCard eachListItem={eachItem} addToCart={(addedItem)=>this.props.addToCart(addedItem)} removeFromCart={(removedItem)=>this.props.removeFromCart(removedItem)} isAddedToCart={this.props.cart.indexOf(eachItem.dpci) > -1}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const stateToProps = state => ({
    products: state.productsReducer.products,
    cart:  state.productsReducer.cart
})

const dispatchToProps = {
    requestProducts,
    addToCart,
    removeFromCart
}

export default connect(stateToProps,dispatchToProps)(ProductGridContainer);
