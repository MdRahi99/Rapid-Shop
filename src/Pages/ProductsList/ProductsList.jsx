import axios from "axios";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { Zoom, toast } from "react-toastify";
import useAllProducts from "../../Hooks/useAllProducts";
import { useState } from "react";
import AddProductModal from "../../Components/AddProductModal";

const ProductsList = () => {

    const [products, refetch] = useAllProducts();
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/products/${id}`)
            .then(data => {
                if (data.data.success) {
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
                    refetch()
                }
            })
    }

    return (
        <>
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2">Total Products: {products.length}</h1>
            <button onClick={openModal} className="py-1 px-3 hover:bg-sky-300 bg-sky-400 text-lg font-bold text-white mt-4">Add Product</button>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    <thead>
                        <tr className="text-left text-sm uppercase text-black font-Ledger font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                const { _id, Name, Price, Rating } = product;
                                return <tr key={_id} className="hover:bg-sky-50 text-left text-sm text-[#313030] font-Ledger font-medium">
                                    <th>{index + 1}</th>
                                    <td>{Name}</td>
                                    <td>${Price}</td>
                                    <td>{Rating}</td>
                                    <td><button onClick={() => handleDelete(_id)}>
                                        <MdDelete className='text-2xl text-orange-500 font-bold hover:text-orange-700 ml-4' />
                                    </button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <AddProductModal
                showModal={showModal}
                closeModal={closeModal} />
        </>
    );
};

export default ProductsList;