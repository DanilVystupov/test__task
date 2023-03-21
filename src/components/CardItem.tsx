import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { CardItemProps } from '../types';

function CardItem({ card, addToCard }: CardItemProps): JSX.Element {

    const handleAddToCard = () => {
        addToCard(card);
    };

    return (
        <div className="card-item">
            <img src={card.thumbnailUrl} alt={card.title} />
            <p>{card.title}</p>
            <button onClick={() => handleAddToCard()}>Добавить в корзину</button>
            <Link to={`/photos/${card.id}`}>Открыть</Link>
        </div>
    );
}

export default CardItem;