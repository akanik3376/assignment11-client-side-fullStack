import { Link } from "react-router-dom";
import icon from '../assets/Icons/th.jpg'
const Error = () => {
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