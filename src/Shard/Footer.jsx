import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import logo from '../assets/Icons/logo.png'

const Footer = () => {
    return (
        <div className=' py-10'>
            <footer className="footer container mx-auto px-8 md:px-0">
                <aside>
                    <img src={logo} alt="" />
                    <p>JOBTEX . <br />Providing reliable tech since 2017</p>
                </aside>
                <nav>
                    <header className="footer-title">Flow Us On Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <p className="text-5xl"><AiFillFacebook></AiFillFacebook></p>
                        <p className="text-5xl"><AiFillYoutube></AiFillYoutube></p>
                        <p className="text-5xl"><AiFillInstagram></AiFillInstagram></p>
                    </div>
                </nav>
                <aside>
                    <h1 className='footer-title'>Contact us</h1>
                    <p className="text-2xl flex items-center"><FiPhoneCall></FiPhoneCall> <span className='text-sm ml-3'>+8801900000</span></p>

                    <h1 className='footer-title mt-5'>Location</h1>
                    <p className="text-2xl flex items-center"><FaLocationDot></FaLocationDot>
                        <span className='ml-3 '>Dhaka,301</span></p>
                </aside>


            </footer>
            <p className='text-center font-semibold mb-8'>©2023 Jobtex. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;