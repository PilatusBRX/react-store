import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductBackground from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context';
import { formatPrice } from '../context/formatPrice';

const SingleProductPage = () => {
  return (
    <>
      <Hero img={singleProductBackground} title='single product' />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            console.log('Hello from loading hell');
            return <h1>Carregando produtos...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className='py-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                    <img
                      // src={`../${image}`}
                      src={image}
                      alt='single product'
                      className='img-fluid'
                    />
                  </div>

                  <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                    <h5 className='text-title mb-4'>Modelo :{title} </h5>
                    <h5 className='text-capitalize text-muted mb-4'>
                      categoria : {company}
                    </h5>
                    <h5 className='text-main text-capitalize mb-4'>
                      preço : {formatPrice(price)}
                    </h5>
                    <p className='text-capitalize text-title mt-3'>
                      Informações sobre o produto :
                    </p>
                    <p>{description}</p>
                    <button
                      type='button'
                      className='main-link'
                      style={{ margin: '0.75rem' }}
                      onClick={() => addToCart(id)}
                    >
                      adicionar ao carrinho
                    </button>
                    <Link
                      to='/produtos'
                      className='main-link'
                      style={{ margin: '0.75rem' }}
                    >
                      Voltar aos produtos
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
};
export default SingleProductPage;
