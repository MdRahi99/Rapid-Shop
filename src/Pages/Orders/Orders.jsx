import { Zoom, toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import axios from "axios";

const Orders = () => {

    const [orders, , , refetch] = useOrders();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/orders/${id}`)
            .then(data => {
                if (data.data.message) {
                    toast.success(`${data.data.message}`, {
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
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2">Orders</h1>
            {
                orders.length > 0 ?
                    <div className="overflow-x-auto mt-8">
                        <table className="table">
                            <thead>
                                <tr className="text-left text-sm uppercase text-black font-Ledger font-bold">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => {
                                        const { _id, name, phone, price } = order;
                                        return <tr key={_id} className="hover:bg-sky-50 text-left text-sm text-[#313030] font-Ledger font-medium">
                                            <th>{index + 1}</th>
                                            <td>{name}</td>
                                            <td>{phone}</td>
                                            <td>${price}</td>
                                            <td><button onClick={() => handleDelete(_id)}>
                                                <MdDelete className='text-2xl text-orange-500 font-bold hover:text-orange-700 ml-4' />
                                            </button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="p-4 w-1/2 bg-sky-400 mx-auto mt-12">
                        <h1 className="text-lg font-Ledger font-bold text-white text-center">Orders is Empty</h1>
                    </div>
            }
        </>
    );
};

export default Orders;