import DashboardChart from "../../Components/DashboardChart";
import useAllProducts from "../../Hooks/useAllProducts";
import useAllUsers from "../../Hooks/useAllUsers";
import useOrders from "../../Hooks/useOrders";

const Dashboard = () => {
    const [products] = useAllProducts();
    const [users] = useAllUsers();
    const [orders] = useOrders();

    return (
        <div className="">
            <h1 className="font-Ledger text-xl bg-sky-100 font-bold text-center py-2 rounded-lg">Overview</h1>
            <div className="flex items-center justify-between w-full my-6 gap-2 lg:gap-8">
                <div className="w-1/3 bg-sky-500 text-white text-center p-4 lg:p-12  text-lg lg:text-2xl font-semibold font-mono rounded-xl">Total Users: {users.length}</div>
                <div className="w-1/3 bg-orange-500 text-white text-center p-4 lg:p-12  text-lg lg:text-2xl font-semibold font-mono rounded-xl">Total Products: {products.length}</div>
                <div className="w-1/3 bg-cyan-500 text-white text-center p-4 lg:p-12  text-lg lg:text-2xl font-semibold font-mono rounded-xl">Total Orders: {orders.length}</div>
            </div>
            <DashboardChart
            users={users}
            products={products}
            orders={orders} />
        </div>
    );
};

export default Dashboard;
