import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartItemType } from './types';
import PhotoCart from './components/PhotoCart';
import PhotoPage from './components/PhotoPage';
import Photos from './pages/Photos';

function App(): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (photo: CartItemType) => {
    setCartItems([...cartItems, photo]);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Корзина: {cartItems.length}</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Photos addToCart={addToCart} />} />
        <Route path="/cart" element={<PhotoCart addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
}

export default App;