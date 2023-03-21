import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CardItemType } from './types';
import CardBasket from './components/CardBasket';
import CardIdPage from './components/CardIdPage';
import CardListContainer from './pages/CardListContainer';

function App(): JSX.Element {
  const [cardItems, setCardItems] = useState<CardItemType[]>([]);

  const addToCard = (card: CardItemType) => {
    setCardItems([...cardItems, card]);
  };


  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Корзина: {cardItems.length}</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<CardListContainer addToCard={addToCard} />} />
        <Route path="/cart" element={
          <CardBasket
            cardItems={cardItems}
            setCardItems={setCardItems}
          />}
        />
        <Route path="/photos/:id" element={<CardIdPage />} />
      </Routes>
    </Router>
  );
}

export default App;