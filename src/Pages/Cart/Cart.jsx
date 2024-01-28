import { Zoom, toast } from "react-toastify";
import useCart from "../../Hooks/useCart";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

const Cart = () => {
    const [cart, , removeFromCart] = useCart();

    const handleDelete = async (id) => {
        try {
            await removeFromCart(id);
            toast.success('Product Deleted Successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const totalPrice = cart.reduce((total, item) => total + item.product.Price, 0).toFixed(2);
    const shippingCost = 12;
    const discount = 5;
    const totalPayable = (parseFloat(totalPrice) + shippingCost - discount).toFixed(2);

    return (
        <>
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2">My Cart: {cart.length}</h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 mt-6">
                <div className="w-full lg:w-4/6 overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-left text-sm uppercase text-black font-Ledger font-bold">
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => {
                                    const { Name, Price } = item.product;
                                    return <tr key={item._id} className="hover:bg-sky-50 text-left text-sm text-[#313030] font-Ledger font-medium">
                                        <th>{index + 1}</th>
                                        <td>{Name}</td>
                                        <td>{Price}</td>
                                        <td><button onClick={() => handleDelete(item._id)}>
                                            <MdDelete className='text-2xl text-orange-500 font-bold hover:text-orange-700 ml-4' />
                                        </button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="divider divider-vertical lg:divider-horizontal"></div>
                <div className="w-full flex flex-col justify-center gap-4 lg:w-2/6">
                    <h1 className="text-lg font-sans font-semibold">Subtotal Price: ${totalPrice}</h1>
                    <h1 className="text-lg font-sans font-semibold">Shipping Cost(+): ${shippingCost}</h1>
                    <h1 className="text-lg font-sans font-semibold">Discount(-): ${discount}</h1>
                    <h1 className="text-lg font-sans font-semibold">Total Payable: ${totalPayable}</h1>
                    <button className="text-lg p-1 bg-sky-400 font-bold text-white hover:bg-sky-300 mt-12">Place Order</button>
                </div>
            </div>
        </>
    );
};

export default Cart;