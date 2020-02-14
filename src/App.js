import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage.js';
import Default from './pages/Default.js';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sobre-a-empresa' component={About} />
          <Route path='/contato' component={Contact} />
          <Route path='/produtos' exact component={Products} />
          <Route path='/produtos/:id' component={SingleProduct} />
          <Route path='/carrinho' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
