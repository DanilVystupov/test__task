import React, { useState, useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import { CartItemType, PhotosProps } from '../types';

function Photos({ addToCart }: PhotosProps): JSX.Element {
    const [photos, setPhotos] = useState<CartItemType[]>([]);


    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
            const data = await response.json();
            setPhotos(data);
        };
        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Cards</h1>
            <PhotoList photos={photos} addToCart={addToCart} />
        </div>
    );
}

export default Photos;