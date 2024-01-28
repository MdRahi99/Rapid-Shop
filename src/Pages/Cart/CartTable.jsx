import { MdDelete } from "@react-icons/all-files/md/MdDelete";

/* eslint-disable react/prop-types */
const CartTable = ({cart, handleDelete}) => {
    return (
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
    );
};

export default CartTable;