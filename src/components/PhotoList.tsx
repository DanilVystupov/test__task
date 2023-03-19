import React from 'react';
import { PhotoListProps } from '../types';
import Photo from './Photo';


function PhotoList({ photos, addToCart }: PhotoListProps) {

    return (
        <div className='photos__wrapper'>
            {photos.map(photo => (
                <Photo
                    key={photo.id}
                    photo={photo}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default PhotoList;