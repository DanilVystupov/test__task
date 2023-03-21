import React from 'react'
import { CardBasketProps } from '../types';

function CardBasket({ cardItems, setCardItems }: CardBasketProps): JSX.Element {

    const handleRemoveCard = (id: number) => {
        const newCardItems = cardItems.filter((card) => card.id !== id);
        setCardItems(newCardItems);
    }

    const handleRemoveAllCard = () => {
        setCardItems([])
    }


    return (
        <div>
            {cardItems.length === 0 ? (
                <h5>КОРЗИНА ПУСТАЯ, ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ - НАЖМИТЕ 'HOME'</h5>
            ) : (
                <div>
                    <button onClick={handleRemoveAllCard}>Очистить корзину</button>
                    <ul>
                        {cardItems.map((card) => (
                            <li key={card.id}>
                                <img src={card.thumbnailUrl} alt={card.title} />
                                {card.title}
                                <button onClick={() => handleRemoveCard(card.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CardBasket;