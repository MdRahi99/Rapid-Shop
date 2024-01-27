// useCart.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCart = () => {
    const { refetch, data: cart = [], isError, isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/cart');
                return res.data.cart;
            } catch (error) {
                throw new Error('Failed to fetch cart');
            }
        }
    });

    const addToCart = async (product) => {
        try {
            await axios.post('http://localhost:5000/api/cart', { product });
            refetch();
        } catch (error) {
            throw new Error('Failed to add item to cart');
        }
    };

    const removeFromCart = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${id}`);
            refetch();
        } catch (error) {
            throw new Error('Failed to remove item from cart');
        }
    };

    return [ cart, addToCart, removeFromCart, refetch, isError, isLoading ];
};

export default useCart;
