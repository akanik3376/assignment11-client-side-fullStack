import { Link } from "react-router-dom";
import icon from '../assets/Icons/th.jpg'
import { useEffect } from "react";
const Error = () => {

    useEffect(() => {
        document.title = 'job-tex error'; // Set the desired page title
    }, []);

    return (
        <div className='container   mx-auto flex justify-center items-center'>
            <div className='mt-20'>
                <img className='' src={icon} alt="" />
                <div className='flex justify-center '>
                    <Link to='/'>
                        <button className='btn btn-success mt-5'>Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;