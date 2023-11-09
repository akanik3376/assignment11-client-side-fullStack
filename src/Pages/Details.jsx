import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsStopwatchFill, BsCurrencyDollar } from "react-icons/bs";
import BidSection from "../Components/BidSection";
import bannerImg from '../assets/img/low-angle-happy-business-man_23-2148514868.jpg'

const Details = () => {
    const [job, setJob] = useState()
    const jobs = useLoaderData()

    const { id } = useParams()

    useEffect(() => {
        const Details = jobs?.find(job => job._id === id)
        setJob(Details)
    }, [id, jobs])

    // console.log(job)
    const { job_title, max_price, min_price, deadline, description } = job || {}

    useEffect(() => {
        document.title = 'job-tex job-details'; // Set the desired page title
    }, []);



    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-center text-4xl mb-6 text-opacity-100  text-cyan-500 font-semibold">
                I thing this will be your dream job
            </h1>
            <div className=" mb-12 ">
                <img className="object-cover h-96 w-full opacity-75" src={bannerImg} alt="" />
            </div>
            <div className="border-2 border-teal-300 hover:border-8 hover:border-green-600 rounded-2xl w-2/3 mx-auto flex-col space-y-3 p-3 hover:bg-teal-100">
                <h2 className="text-2xl font-semibold">{job_title}</h2>
                <h6 className="text-xl font-bold">Job description: <p className="text-sm">{description}</p></h6>

                <p className="flex items-center font-semibold">Maximum price:<BsCurrencyDollar></BsCurrencyDollar>{max_price}</p>
                <p className="flex items-center font-semibold">Minimum price:<BsCurrencyDollar></BsCurrencyDollar>{min_price}</p>

                <p className="flex items-center font-semibold gap-2">Deadline:<BsStopwatchFill className="text-blue-800"></BsStopwatchFill> {deadline}</p>


                <button
                    className="border-2 border-teal-500 rounded py-2 px-4 bg-teal-300 text-white font-bold">Bid now</button>


            </div>
            <BidSection job={job}></BidSection>
        </div>
    );
};

export default Details;