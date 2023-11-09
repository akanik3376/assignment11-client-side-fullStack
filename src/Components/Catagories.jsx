// import axios from "axios";
// import { useState } from "react";
import { useEffect, useState } from "react";
import Job from "./job";
import { useLoaderData, } from "react-router-dom";
import axios from "axios";



const Catagories = () => {
    const [catagories, setCatagories] = useState('Web Development')
    const [jobs, setJobs] = useState()
    const data = useLoaderData()
    console.log(data)
    useEffect(() => {

        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/job?category=${catagories}`)
                setJobs(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [catagories])

    return (
        <div className="container mx-auto">

            <h1 className="text-4xl font-bold text-center mt-12 mb-8">Job Catagories :</h1>

            <div className="flex gap-5 justify-center items-center">
                <button className={catagories === `Web Development` ? 'btn btn-primary' : 'categoryBtn'} onClick={() => setCatagories('Web Development')}>Web development</button>

                <button className={catagories === `Digital Marketing` ? ' btn btn-primary' : 'categoryBtn'} onClick={() => setCatagories('Digital Marketing')}> Digital Marketing</button>
                <button className={catagories === `Graphics Design` ? ' btn btn-primary' : 'categoryBtn'} onClick={() => setCatagories('Graphics Design')}>Graphics Designer</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    jobs?.map(job => <Job key={job._id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default Catagories;