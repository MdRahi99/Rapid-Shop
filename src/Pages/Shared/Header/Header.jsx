import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';

const Header = () => {

    const {logout} = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <ul className="menu p-4 w-80 min-h-full bg-white gap-4 font-Ledger">
                <Link to='/dashboard' className='p-4 text-xl font-bold uppercase'><span className='pr-2 border-r-4 border-double border-sky-400'>Rapid</span> Shop</Link>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/dashboard'>Overview</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/dashboard/products'>Products List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/dashboard/customers'>Customers List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/dashboard/orders'>Orders List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/dashboard/cart'>Cart Items</Link>
                </li>
                <li>
                    <button onClick={() => {
                        logout()
                        navigate('/')
                        }} className='font-bold text-sm py-2 hover:bg-sky-400 uppercase hover:text-white bg-sky-200 rounded-none mt-12 flex justify-center'>Log Out</button>
                </li>
            </ul>
        </>
    );
};

export default Header;