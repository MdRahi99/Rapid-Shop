/* eslint-disable react/prop-types */

import axios from "axios";
import { Zoom, toast } from "react-toastify";
import useAllProducts from "../Hooks/useAllProducts";
import { useForm } from "react-hook-form";

const AddProductModal = ({ showModal, closeModal }) => {

    const [,refetch] = useAllProducts();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onProductSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/products', data);
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
            refetch();
            reset();
            closeModal();
            return response.data;
        } catch (error) {
            console.error('Error adding new product:', error);
            throw error;
        }
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex Products-center justify-center">
                    <div className="bg-white w-11/12 lg:w-2/5 mx-auto h-fit px-8 py-4 rounded-xl mt-3 lg:mt-6">
                        <h2 className="text-2xl font-bold text-center border-b-2 border-black p-2 mb-3">Add Product</h2>
                        <form onSubmit={handleSubmit(onProductSubmit)} className='flex flex-col gap-4'>
                            <div>
                                <h1 className="font-semibold text-lg mb-1">Product Name</h1>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Enter Product name here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.Name ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("Name", { required: 'Product Name is required', maxLength: { value: 50, message: 'Product Name must be at most 50 characters' } })}
                                />
                                {errors.Name && <span className="text-red-500">{errors.Name.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Product Price</h1>
                                <input
                                    type="text"
                                    name="Price"
                                    placeholder="Enter Product price here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.Price ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("Price", { required: 'Product Price is required', setValueAs: (value) => parseFloat(value) })}
                                />
                                {errors.Price && <span className="text-red-500">{errors.Price.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Product Image Url</h1>
                                <input
                                    type="text"
                                    name="ImageUrl"
                                    placeholder="Enter Product image url here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.ImageUrl ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("ImageUrl", { required: 'Product ImageUrl is required' })}
                                />
                                {errors.ImageUrl && <span className="text-red-500">{errors.ImageUrl.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Product Rating</h1>
                                <input
                                    type="text"
                                    name="Rating"
                                    placeholder="Enter Product rating here"
                                    className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.Rating ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("Rating", { required: 'Product Rating is required', setValueAs: (value) => parseFloat(value) })}
                                />
                                {errors.Rating && <span className="text-red-500">{errors.Rating.message}</span>}
                            </div>

                            <div>
                                <h1 className="font-semibold text-lg mb-1">Product Description</h1>
                                <textarea
                                    type="text"
                                    name="Description"
                                    placeholder="Enter Product description here"
                                    className={`textarea textarea-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.Description ? 'border-red-500 focus:border-red-500' : ''
                                        }`}
                                    {...register("Description", { required: 'Product Description is required' })}
                                />
                                {errors.Description && <span className="text-red-500">{errors.Description.message}</span>}
                            </div>

                            <div className="flex Products-center justify-between gap-4 lg:gap-8 mt-3">
                                <button className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-orange-600 hover:text-white shadow-orange-300">
                                    Add
                                </button>
                                <button
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

export default AddProductModal;
