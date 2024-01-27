import ProductCard from "../../Components/ProductCard";
import useAllProducts from "../../Hooks/useAllProducts";

const UserProducts = () => {

    const [ products ] = useAllProducts();

    return (
        <>
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2">Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                {
                    products.map(product => {
                        return <ProductCard 
                        key={product._id}
                        product={product} />
                    })
                }
            </div>
        </>
    );
};

export default UserProducts;