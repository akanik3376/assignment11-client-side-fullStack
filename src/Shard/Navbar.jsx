import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/Icons/logo.png';

const Navbar = () => {

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
        ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 transform translate-y-0'
        : 'relative';



    // navbar links
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">Add job</NavLink></li>
        <li><NavLink to="/contact">My posted jobs</NavLink></li>
        <li><NavLink to="/contact">My Bids</NavLink></li>
        <li><NavLink to="/contact">Bid Requests</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>



    return (
        <div className={`navbar bg-base-100 max-w-[1100px] mx-auto ${navbarClasses}`}>
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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;