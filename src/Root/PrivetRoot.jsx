/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoot = ({ children }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>

        </div>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRoot;