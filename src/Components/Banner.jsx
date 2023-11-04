
import { Link } from 'react-router-dom';
import bannerImg from '../assets/img/slider91.png'


const Banner = () => {
    return (
        <div className="my-12 flex flex-col md:flex-row just items-center bg-[#c8bbc6] p-10">
            <div className=' border-0 lg:border-r-2'>
                <h1 className="text-5xl font-bold mb-5">Find The Job That <span className='text-green-800'>Fits Your Life</span></h1>
                <p>Resume-Library is a true performance-based job board. Enjoy custom hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>

                <div className="flex gap-5 mt-5  font-semibold">
                    <p className='hover:underline text-xl'><Link>web development</Link></p>
                    <p className='hover:underline text-xl'><Link>digital marketing</Link></p>
                    <p className='hover:underline text-xl'><Link> graphics design</Link></p>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;