import axios from "axios";
import useAllUsers from "../../Hooks/useAllUsers";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { Zoom, toast } from "react-toastify";

const Customers = () => {

    const [users, refetch] = useAllUsers();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
            .then(data => {
                if (data.data.success) {
                    toast.success('User Deleted Successfully!', {
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
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2">Customers</h1>
            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        <thead>
                            <tr className="text-left text-sm uppercase text-black font-Ledger font-bold">
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    const { _id, name, phoneNumber } = user;
                                    return <tr key={_id} className="hover:bg-sky-50 text-left text-sm text-[#313030] font-Ledger font-medium">
                                        <th>{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{phoneNumber}</td>
                                        <td><button onClick={() => handleDelete(_id)}>
                                            <MdDelete className='text-2xl text-orange-500 font-bold hover:text-orange-700 ml-4' />
                                        </button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Customers;