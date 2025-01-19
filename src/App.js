import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            <img src="https://img.icons8.com/ios/50/000000/home.png" alt="Home" />
            <span>Home</span>
          </Link>
          <Link to="/products" className="nav-link">
            <img src="https://img.icons8.com/ios/50/000000/shopping-basket.png" alt="Products" />
            <span>Products</span>
          </Link>
          <Link to="/cart" className="nav-link">
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="Cart" />
            <span>Cart</span>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
