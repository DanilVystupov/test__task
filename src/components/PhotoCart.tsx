import React from 'react'
import { PhotoCartProps } from '../types';

function PhotoCart({ cartItems }: PhotoCartProps): JSX.Element {

    return (
        <div>
            {cartItems.length === 0 ? (
                <h5>КОРЗИНА ПУСТАЯ, ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ - НАЖМИТЕ 'HOME'</h5>
            ) : (
                <ul>
                    {cartItems.map((photo) => (
                        <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            {photo.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PhotoCart;