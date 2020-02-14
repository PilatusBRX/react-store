import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';
export default function HomePage() {
  return (
    <>
      <Hero title='Produtos Incríveis' max='true'>
        <Link to='/produtos' className='main-link' style={{ margin: '2rem' }}>
          Nossos Produtos
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
