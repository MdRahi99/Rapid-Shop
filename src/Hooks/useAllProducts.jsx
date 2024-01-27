import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllProducts = () => {

    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/api/products')
            return res.data.data;
        }
    });

    return [products, refetch]
};

export default useAllProducts;