import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { Zoom, toast } from "react-toastify";

const ProductDetailsCard = (product) => {
    const { Name, ImageUrl, Rating, Description, Price } = product.product.data;

    const [, addToCart] = useCart();

    const handleAddToCart = () => {
        addToCart(product.product.data);
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
        <>
            <div>
                <div className="flex flex-col lg:flex-row gap-4 justify-between">
                    <div className="w-full lg:w-1/2">
                        <img className="w-full rounded-tl-3xl rounded-br-3xl h-fit" src={ImageUrl} alt={Name} />
                    </div>
                    <div className="w-full flex flex-col gap-6 lg:w-1/2 p-10 shadow-lg">
                        <h1 className="text-xl py-3 bg-sky-100 font-Ledger font-bold text-center mb-4">{Name}</h1>
                        <p className="text-xl font-bold text-orange-600">Price: ${Price.toFixed(2)}</p>
                        <p className="flex text-xl items-center gap-1 font-bold text-orange-600">Rating: {Rating}</p>
                        <p className="text-lg text-black opacity-75 font-serif font-bold">Description:<span className='block font-sans mt-2 font-normal'>{Description}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <button onClick={handleAddToCart} className='w-1/2 py-2 text-sm mt-3 bg-sky-200 uppercase font-Ledger font-bold hover:bg-sky-500 hover:text-white'>Add to Cart</button>
                    <Link className='w-1/2 py-2 text-sm mt-3 bg-sky-200 uppercase text-center font-Ledger font-bold hover:bg-sky-500 hover:text-white' to='/dashboard/products'>Back</Link>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsCard;