import React from 'react';
import { formatPrice } from '../../context/formatPrice';
import { ProductConsumer } from '../../context';
import PayPalBtn from './PayPalBtn';

const CartTotals = ({ history }) => {
  return (
    <div className='container'>
      <div className='row'>
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className='col text-title text-center my-4'>
                <button
                  className='btn btn-outline-danger text-capitalize mb-4'
                  onClick={clearCart}
                >
                  esvaziar carrinho
                </button>
                <h3>subtotal: {formatPrice(cartSubTotal)}</h3>
                <h3>taxa: {formatPrice(cartTax)}</h3>
                <h3>total: {formatPrice(cartTotal)}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
