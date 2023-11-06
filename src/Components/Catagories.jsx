import axios from "axios";
import { useState } from "react";
import Job from "./job";



const Catagories = () => {

    const [jobs, setJobs] = useState()

    axios.get('http://localhost:5000/api/v1/jobs')
        .then(response => {
            setJobs(response.data);

        })
        .catch(error => {
            console.log(error)
        });


    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mt-12 mb-8">Job Catagories :</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    jobs?.map(job => <Job key={job._id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Catagories;