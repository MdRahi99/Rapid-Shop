import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <ul className="menu p-4 w-80 min-h-full bg-white gap-4 font-Ledger">
                <Link to='/' className='p-4 text-xl font-bold uppercase'><span className='pr-2 border-r-4 border-double border-sky-400'>Rapid</span> Shop</Link>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/'>Overview</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/Products'>Products List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/customers'>Customers List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/orders'>Orders List</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/cart'>Cart Items</Link>
                </li>
                <li>
                    <button className='font-bold text-sm py-2 hover:bg-sky-400 uppercase hover:text-white bg-sky-200 rounded-none mt-12 flex justify-center'>Log Out</button>
                </li>
            </ul>
        </>
    );
};

export default Header;