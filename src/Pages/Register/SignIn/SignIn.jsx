import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-50">
            <div className="bg-white p-16 rounded-tl-3xl rounded-br-3xl shadow-lg w-5/6 lg:w-2/6 mx-auto shadow-sky-300">
                <h2 className="text-xl uppercase text-center font-semibold mb-8 font-Ledger border-b-2 border-sky-300 pb-4">Rapid Shop Login</h2>
                <form className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-lg font-serif mb-2">
                            Phone Number
                        </h1>
                        <input type="tel" name="phoneNumber" placeholder="Enter your phone number" className="input input-bordered w-full rounded-0 focus:outline-none input-info rounded-none h-10" />
                    </div>
                    <div>
                        <h1 className="text-lg font-serif mb-2">
                            Password
                        </h1>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full rounded-0 focus:outline-none input-info rounded-none h-10" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-sky-500 mt-4 text-white h-10 hover:bg-sky-600 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <h1 className="mt-4">Don&apos;t have an Account? <Link to='/register' className="font-bold">Register</Link></h1>
            </div>
        </div>
    );
};

export default SignIn;
