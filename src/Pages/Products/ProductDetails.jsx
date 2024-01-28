import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Shared/Loader/Loader";
import ProductDetailsCard from "../../Components/ProductDetailsCard";

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rapid-shop-server.vercel.app/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    return (
        <>
         <ProductDetailsCard product={product} />
        </>
    );
};

export default ProductDetails;