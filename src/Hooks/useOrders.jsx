import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useOrders = () => {
    const { refetch, data: orders = [], isError, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/orders');
                return res.data.orders;
            } catch (error) {
                throw new Error('Failed to fetch orders');
            }
        }
    });

    const addOrder = async (order) => {
        try {
            await axios.post('http://localhost:5000/api/orders', order);
            refetch();
        } catch (error) {
            throw new Error('Failed to add order');
        }
    };

    const removeOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/orders/${id}`);
            refetch();
        } catch (error) {
            throw new Error('Failed to remove order');
        }
    };

    return [orders, addOrder, removeOrder, refetch, isError, isLoading];
};

export default useOrders;
