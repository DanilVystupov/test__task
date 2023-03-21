import axios from 'axios';
import { CardItemType } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchCards = async (): Promise<CardItemType[]> => {
    try {
        const responce = await axios.get(`${BASE_URL}/photos?_limit=3`)
        return responce.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getCard = async (id: string): Promise<CardItemType | null> => {
    try {
        const responce = await axios.get(`${BASE_URL}/photos/${id}`)
        return responce.data
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getComments = async (id: string): Promise<CardItemType[]> => {
    try {
        const responce = await axios.get(`${BASE_URL}/comments?postId=${id}`)
        return responce.data
    } catch (error) {
        console.error(error);
        return [];
    }
};