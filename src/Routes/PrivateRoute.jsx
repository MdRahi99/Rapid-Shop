/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import {useAuth} from '../Hooks/useAuth';
import Loader from '../Pages/Shared/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading && !user){
        return <Loader />
    }

    if(user){
        return children;
    }
    return <Navigate to='/' state={{ from: location}} replace></Navigate>
}

export default PrivateRoute;