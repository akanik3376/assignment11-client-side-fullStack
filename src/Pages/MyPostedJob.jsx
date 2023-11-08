import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useLoaderData } from "react-router-dom";
import PostJobCard from "../Components/PostJobCard";
import img from '../assets/img/smiley-woman-desk-pointing-tablet_23-2148434687.jpg'


const MyPostedJob = () => {
    const { user } = useAuth()
    const [postJob, setPostJob] = useState()

    // load all data
    const data = useLoaderData()


    // load data for who post this job with find method

    useEffect(() => {
        const postJob = data.filter(data => data.email === user?.email)

        setPostJob(postJob)
    }, [data, user])



    return (
        <div className="mt-5 mb-12">
            <div className="hero h-[50vh]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="opacity-40 text-5xl font-bold text-center mb-6 text-blue-300">My posted jobs</h1>
                        <div className="opacity-40 flex justify-center items-center">
                            <Link className="text-white font-bold text-xl" to='/'>Home</Link>/
                            <Link className="text-white font-bold text-xl" to='/addJob'>Add job</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-12">
                {
                    postJob?.map(job => <PostJobCard key={job._id} job={job}></PostJobCard>)
                }
            </div>

        </div>
    );
};

export default MyPostedJob;