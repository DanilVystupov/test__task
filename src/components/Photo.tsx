import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { PhotoProps } from '../types';

function Photo({ photo, addToCart }: PhotoProps): JSX.Element {

    const handleAddToCart = () => {
        addToCart(photo);
    };

    return (
        <div className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <button onClick={() => handleAddToCart()}>Добавить в корзину</button>
            <Link to={`/photos/${photo.id}`}>Открыть</Link>
        </div>
    );
}

export default Photo;