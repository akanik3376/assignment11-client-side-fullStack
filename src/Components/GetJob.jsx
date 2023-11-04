
import jobImg from '../assets/img/h91.png'

const GetJob = () => {
    return (
        <div className='container mx-auto my-12'>
            <h1 className="text-4xl font-bold text-center mb-6">Get the job that`s right for you</h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='flex-col space-y-3'>
                    <div className=' border-l-8 hover:border-green-800'>
                        <h4 className='text-2xl font-bold pl-2 mb-2'>Discover New Opportunities</h4>
                        <p className='pl-2'>Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                    </div>
                    <div className=' border-l-8 hover:border-green-800'>
                        <h4 className='text-2xl font-bold pl-2 mb-2'>Discover New Opportunities</h4>
                        <p className='pl-2'>Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                    </div>
                    <div className=' border-l-8 hover:border-green-800'>
                        <h4 className='text-2xl font-bold pl-2 mb-2'>Discover New Opportunities</h4>
                        <p className='pl-2'>Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                    </div>
                </div>
                <div>
                    <img src={jobImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GetJob;