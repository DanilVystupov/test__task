import React from 'react';
import { CardListProps } from '../types';
import CardItem from './CardItem';


function CardList({ cards, addToCard }: CardListProps) {

    return (
        <div className='cards__wrapper'>
            {cards.map(card => (
                <CardItem
                    key={card.id}
                    card={card}
                    addToCard={addToCard}
                />
            ))}
        </div>
    );
}

export default CardList;