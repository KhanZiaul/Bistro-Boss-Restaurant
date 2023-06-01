import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AdminProvider = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin, isLoading] = useAdmin()
    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminProvider;