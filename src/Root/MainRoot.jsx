import { Outlet } from "react-router-dom";
import Footer from "../Shard/Footer";
import Navbar from "../Shard/Navbar";

const MainRoot = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;