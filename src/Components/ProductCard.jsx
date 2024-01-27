/* eslint-disable react/prop-types */
import { HiStar } from '@react-icons/all-files/hi/HiStar'
import { HiExternalLink } from '@react-icons/all-files/hi/HiExternalLink'
import { Link } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { Zoom, toast } from 'react-toastify';
const ProductCard = ({ product }) => {

    const { _id, ImageUrl, Name, Price, Description, Rating } = product;

    const [, addToCart] = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        toast.success('Product Added Successfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom
        });
    };

    return (
        <div className="shadow-2xl hover:shadow-md hover:shadow-sky-200 bg-base-100 flex flex-col gap-4 p-4 relative">
            <img className="w-full h-96 lg:w-96 lg:h-52 rounded-tl-2xl rounded-br-2xl" src={ImageUrl} alt={Name} />
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-Ledger font-semibold">{Name}</h3>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-orange-600">${Price.toFixed(2)}</p>
                    <p className="flex items-center gap-1 font-bold text-orange-600"><HiStar className='' />{Rating}</p>
                </div>
                <p className="text-slate-500">{Description.slice(0, 150)}</p>
            </div>
            <Link to={`/products/product-details/${_id}`} className='absolute top-3 right-2 p-2 rounded-full bg-white hover:bg-sky-100 shadow-lg'>
                <HiExternalLink className='text-xl' />
            </Link>
            <button onClick={handleAddToCart} className='py-2 text-sm mt-3 bg-sky-200 uppercase font-Ledger font-bold hover:bg-sky-500 hover:text-white'>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
