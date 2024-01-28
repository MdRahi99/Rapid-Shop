import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hooks/useAuth";
import { Zoom, toast } from 'react-toastify';

const SignIn = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (data) => {
        try {
            await login(data);
            toast.success('Logged In Successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
                onClose: () => navigate("/dashboard")
            });
        } catch (error) {
            toast.error(`Error: ${error.message}`, {
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
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50">
            <div className="bg-white p-6 lg:p-16 rounded-tl-3xl rounded-br-3xl shadow-lg w-5/6 lg:w-2/6 mx-auto shadow-sky-300">
                <h2 className="text-xl uppercase text-center font-semibold mb-8 font-Ledger border-b-2 border-sky-300 pb-4">Rapid Shop Login</h2>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="text-lg font-serif mb-2">Phone Number</h1>
                        <input
                            type="text"
                            {...register("phoneNumber", {
                                required: '*Required Field',
                                pattern: {
                                    value: /^(\+8801\d{9})$/,
                                    message: "Please provide a valid BD (+880) phone number",
                                },
                            })}
                            placeholder="Enter your phone number"
                            className={`input input-bordered w-full rounded-0 focus:outline-none input-info rounded-none h-10 ${errors.name ? 'border-red-500 focus:border-red-500' : ''
                                }`}
                        />
                        {errors.phoneNumber && (
                            <h1 className="font-semibold mt-3 text-orange-600 text-sm">{errors.phoneNumber.message}</h1>
                        )}
                    </div>
                    <div>
                        <h1 className="text-lg font-serif mb-2">Password</h1>
                        <input
                            type="password"
                            {...register("password", { required: '*Required Field', minLength: { value: 8, message: 'Password must be 8 characters or more' } })}
                            placeholder="Enter your password"
                            className={`input input-bordered w-full rounded-0 focus:outline-none input-info rounded-none h-10 ${errors.name ? 'border-red-500 focus:border-red-500' : ''
                                }`}
                        />
                        {errors.password && (
                            <h1 className="font-semibold mt-3 text-orange-600 text-sm">{errors.password.message}</h1>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-sky-500 mt-4 text-white h-10 hover:bg-sky-600 focus:outline-none"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <h1 className="mt-4">
                    Don&apos;t Have an Account? <Link to="/register" className="font-bold">Register</Link>
                </h1>
            </div>
        </div>
    );
};

export default SignIn;
