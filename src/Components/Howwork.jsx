
import post from '../assets/icons2/icon4-1.svg'
import find from '../assets/icons2/icon5.svg'
import pay from '../assets/icons2/icon8.svg'
import halp from '../assets/icons2/icon7.svg'


const HowWork = () => {
    return (
        <div className='bg-[#123841] my-14 '>
            <h1 className="text-5xl pt-14 text-[#64666C] mb-3 font-bold text-center">How It Work
            </h1>
            <p className="text-center text-[#64666C]">Streamline your hiring process with strategic channels to reach qualified candidates
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 p-5 gap-4'>
                <div className='flex flex-col items-center text-center justify-center gap-y-3 text-[#64666C]'>
                    <img className='w-14 rounded-full' src={halp} alt="" />
                    <h3 className='text-2xl font-bold'>1.Post A Job</h3>
                    <p className='text-sm flex-1 '>Stacks is a production-ready library of stakable content blocks built in React Native.</p>
                </div>
                <div className='flex flex-col items-center text-center justify-center gap-y-3 text-[#64666C]'>
                    <img className='w-14 rounded-full' src={pay} alt="" />
                    <h3 className='text-2xl font-bold'>2. Find Employers</h3>
                    <p className='text-sm flex-1 '>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className='flex flex-col items-center text-center justify-center gap-y-3 text-[#64666C]'>
                    <img className='w-14 rounded-full' src={post} alt="" />
                    <h3 className='text-2xl font-bold'>3. Pay Safely</h3>
                    <p className='text-sm flex-1 '>Stacks is a production-ready library of stakable content blocks built in React Native.</p>
                </div>
                <div className='flex flex-col items-center text-center justify-center gap-y-3 text-[#64666C]'>
                    <img className='w-14 rounded-full' src={find} alt="" />
                    <h3 className='text-2xl font-bold'>4. We’re Here To Help</h3>
                    <p className='text-sm flex-1 '>Stacks is a production-ready library of stakable content blocks built in React Native.</p>
                </div>


            </div>
        </div>
    );
};

export default HowWork;