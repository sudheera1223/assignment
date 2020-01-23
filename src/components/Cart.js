import React from 'react';

const cart = ({cartCount}) =>{
    return (
      <div className='cart-contn'>
        <div className='cart-count'>
            Items added: {cartCount}
        </div>
      </div>
    );
}

export default cart;
