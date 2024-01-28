import { Zoom, toast } from "react-toastify";
import useCart from "../../Hooks/useCart";
import AddOrderModal from "../../Components/AddOrderModal";
import { useState } from "react";
import CartTable from "./CartTable";

const Cart = () => {
    const [cart, , removeFromCart] = useCart();
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
            {
                cart.length > 0 ?
                    <>
                        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 mt-6">
                            <div className="w-full lg:w-4/6 overflow-x-auto">
                                <CartTable
                                cart={cart}
                                handleDelete={handleDelete} />
                            </div>
                            <div className="divider divider-vertical lg:divider-horizontal"></div>
                            <div className="w-full flex flex-col justify-center gap-4 lg:w-2/6">
                                <h1 className="text-lg font-sans font-semibold">Subtotal Price: ${totalPrice}</h1>
                                <h1 className="text-lg font-sans font-semibold">Shipping Cost(+): ${shippingCost}</h1>
                                <h1 className="text-lg font-sans font-semibold">Discount(-): ${discount}</h1>
                                <h1 className="text-lg font-sans font-semibold">Total Payable: ${totalPayable}</h1>
                                <button onClick={openModal} className="text-lg p-1 bg-sky-400 font-bold text-white hover:bg-sky-300 mt-12">Place Order</button>
                            </div>
                        </div>
                        <AddOrderModal
                            totalPayable={totalPayable}
                            showModal={showModal}
                            closeModal={closeModal} />
                    </>
                    :
                    <div className="p-4 w-1/2 bg-sky-400 mx-auto mt-12">
                        <h1 className="text-lg font-Ledger font-bold text-white text-center">Cart is Empty</h1>
                    </div>
            }
        </>
    );
};

export default Cart;