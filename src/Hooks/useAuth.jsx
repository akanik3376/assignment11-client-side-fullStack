import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useAuth = () => {
    const userInfo = useContext(AuthContext)

    // console.log(userInfo)
    return userInfo;
};

export default useAuth;

