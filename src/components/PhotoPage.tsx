import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartItemType } from '../types';


function PhotoPage(): JSX.Element {
    const [photo, setPhoto] = useState<CartItemType | null>(null);
    const [comments, setComments] = useState<CartItemType[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
            const data = await response.json();
            setPhoto(data);
        };
        fetchPhoto();
    }, [id]);


    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            const data = await response.json();
            setComments(data);
        };
        fetchPhoto();
    }, [id]);


    return (
        <div>
            {photo ? (
                <div>
                    <img src={photo.url} alt={photo.title} />
                    <h2>{photo.title}</h2>
                    <h3>Comments:</h3>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.id}>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                                <p>{comment.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PhotoPage;