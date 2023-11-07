import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";


const MyPostedJob = () => {
    const { user } = useAuth()
    const [postJob, setPostJob] = useState()

    // load all data
    const data = useLoaderData()


    // load data for who post this job with find method
    useEffect(() => {
        const postJob = data.find(data => data.email === user?.email)
        console.log(postJob)
        setPostJob(postJob)
    }, [data, user])


    return (
        <div>

        </div>
    );
};

export default MyPostedJob;