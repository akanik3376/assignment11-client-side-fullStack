import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import PostJobCard from "../Components/PostJobCard";


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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-12">
            {
                postJob?.map(job => <PostJobCard key={job._id} job={job}></PostJobCard>)
            }
        </div>
    );
};

export default MyPostedJob;