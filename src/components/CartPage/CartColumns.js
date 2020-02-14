import React from 'react';

const CartColumns = () => {
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className='row'>
        <div className='col-lg-2'>
          <p className='text-uppercase'>produtos</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>nome dos produtos</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>preço</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>quantidade</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>remover</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
