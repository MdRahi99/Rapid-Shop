import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

const Error = () => {

    const { user } = useAuth();

    return (
        <>
            <div className='text-2xl font-bold w-4/5 lg:w-1/2 mx-auto text-center bg-sky-400 text-white font-Ledger uppercase p-8 lg:p-20 mt-20 flex flex-col gap-8'>
                <h1>404 Not Found</h1>
                {
                    user ?
                        <Link to='/dashboard' className='text-lg bg-orange-500 hover:bg-orange-600 p-1 w-44 mx-auto'>Back</Link>
                        :
                        <Link to='/' className='text-lg bg-orange-500 hover:bg-orange-600 p-1 w-44 mx-auto'>Back</Link>
                }
            </div>
        </>
    );
};

export default Error;