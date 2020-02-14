import React from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className='py-5'>
            <div className='container'>
              {/* title */}
              <Title center title='Nossos produtos' />

              {/* Product filter component */}
              <ProductFilter />
              <div className='row'>
                <div className='col-10 mx-auto'>
                  {/* <div className='text-title'>
                    Total: {filteredProducts.length}
                  </div> */}
                </div>
              </div>

              {/* products */}
              <div className='row py-5'>
                {filteredProducts.length === 0 ? (
                  <div className='col text-title text-center'>
                    Lamentamos, mas o termo procurado não corresponde aos nossos
                    produtos.
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
