import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { CardItemType } from '../types';
import { getCard, getComments } from '../API/cardApi';
import Loader from '../UI/Loader/Loader';


function CardIdPage(): JSX.Element {
    const [card, setCard] = useState<CardItemType | null>(null);
    const [comments, setComments] = useState<CardItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const fetchCard = async () => {
            const data = await getCard(id);
            setCard(data);
            setIsLoading(false)
        };
        fetchCard();
    }, [id]);


    useEffect(() => {
        if (!id) return;

        const fetchCard = async () => {
            const data = await getComments(id);
            setComments(data);
            setIsLoading(false)
        };
        fetchCard();
    }, [id]);


    return (
        <div>
            {isLoading
                ? <div className='loader__wrap'><Loader /></div>
                : <div>
                    <img src={card?.url} alt={card?.title} />
                    <h2>{card?.title}</h2>
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
            }
        </div>
    );
}

export default CardIdPage;