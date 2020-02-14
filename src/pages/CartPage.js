import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartBackground from '../images/storeBcg.jpeg';

export default function CartPage() {
  return (
    <>
      <Hero img={cartBackground} />
      <CartSection />
    </>
  );
}
