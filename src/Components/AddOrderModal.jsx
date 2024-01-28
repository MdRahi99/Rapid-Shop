/* eslint-disable react/prop-types */
import { Zoom, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useOrders from "../Hooks/useOrders";

const AddOrderModal = ({ totalPayable, showModal, closeModal }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [, addOrder, , refetch] = useOrders();

    const onOrderSubmit = async (data) => {
        try {
            await addOrder(data);
            toast.success('Order Placed Successfully!', {
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
            refetch();
            reset();
            closeModal();
        } catch (error) {
            console.error('Error placing order:', error);
            throw error;
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex Products-center justify-center">
                    <div className="bg-white w-11/12 lg:w-2/5 mx-auto h-fit px-8 py-4 rounded-xl mt-3 lg:mt-6">
                        <h2 className="text-2xl font-bold text-center border-b-2 border-black p-2 mb-3">Place Order</h2>
                        <form onSubmit={handleSubmit(onOrderSubmit)} className='flex flex-col gap-4'>
                            <div>
                                <h1 className="font-semibold text-lg mb-1">Full Name</h1>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("name", { required: 'Name is required', maxLength: { value: 50, message: 'Name must be at most 50 characters' } })}
                                />
                                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Phone Number</h1>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your phone number here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.phone ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("phone", { required: 'Phone number is required' })}
                                />
                                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Total Cost</h1>
                                <input
                                    type="text"
                                    name="price"
                                    readOnly
                                    value={totalPayable}
                                    placeholder="Enter price"
                                    className="input input-bordered w-full mx-auto font-bold rounded-lg focus:outline-none"
                                    {...register("price", {
                                        setValueAs: (value) => parseFloat(value)
                                    })}
                                />
                                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Address</h1>
                                <textarea
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address here"
                                    className={`textarea textarea-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.address ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("address", { required: 'Address is required' })}
                                />
                                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                            </div>

                            <div className="flex justify-between gap-4 lg:gap-8 mt-3">
                                <button type="submit" className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-orange-600 hover:text-white shadow-orange-300">
                                    Order
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-orange-600 hover:text-white shadow-orange-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddOrderModal;
