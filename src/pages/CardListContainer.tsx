import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { CardItemType, CardsProps } from '../types';
import { fetchCards } from '../API/cardApi';
import Loader from '../UI/Loader/Loader';
import '../App.css';

function CardListContainer({ addToCard }: CardsProps): JSX.Element {
    const [cards, setCards] = useState<CardItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchCard = async () => {
            const data = await fetchCards()
            setCards(data);
            setIsLoading(false);
        };
        fetchCard();
    }, []);

    return (
        <div>
            <h1>Cards</h1>
            {isLoading
                ? <div className='loader__wrap'><Loader /></div>
                : <CardList cards={cards} addToCard={addToCard} />
            }
        </div>
    );
}

export default CardListContainer;