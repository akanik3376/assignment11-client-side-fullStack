// import axios from "axios";
// import { useState } from "react";
import Job from "./job";
import { useLoaderData } from "react-router-dom";



const Catagories = () => {

    const jobs = useLoaderData()

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mt-12 mb-8">Job Catagories :</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    jobs?.map(job => <Job key={job._id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Catagories;