import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Icons/logo.png';
import useAuth from "../Hooks/useAuth";
import userImg from '../assets/icons2/th.jpg'

const Navbar = () => {
    const { user, logoutUser } = useAuth()
    // Static  navbar when scrolling website !
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        // console.log(isSticky)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);

    // custom class for Static navbar when scrolling website !
    const navbarClasses = isSticky
        ? 'fixed top-0 left-0 right-0 bg-[#c8bbc6] shadow-md z-50 transition-transform duration-300 transform translate-y-0'
        : 'relative';



    // navbar links
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addJob">Add job</NavLink></li>
        <li><NavLink to="/myPostedJob">My posted jobs</NavLink></li>
        <li><NavLink to="/myBids">My Bids</NavLink></li>
        <li><NavLink to="/contact">Bid Requests</NavLink></li>
        {/* <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li> */}
    </>

    const handelLogOut = () => {
        logoutUser()
    }

    return (
        <div className={`max-w-[1200] bg-[#c8bbc6] ${navbarClasses}`} >
            <div className={`navbar  container mx-auto `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLink
                            }
                        </ul>
                    </div>

                    <img src={logo} alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="ml-5">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-12 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user?.photoURL} alt='' /> :
                                                <img src={userImg} alt="" />
                                        }

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                    <li>
                                        <p className="font-bold">{user?.email}</p>

                                    </li>
                                    <li>
                                        <button className="btn mt-2 py-3 px-5 btn-primary font-bold"
                                            onClick={handelLogOut}
                                        >Sign Out</button>

                                    </li>
                                </ul>
                            </div>
                                :

                                <div className="flex justify-between items-center" >
                                    <Link to='/login'>
                                        <button className="btn btn-sm  btn-primary font-bold">Sign In</button>
                                    </Link>


                                </div>
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;