/* eslint-disable react/prop-types */
import { BsStopwatchFill } from "react-icons/bs";

const Job = ({ job }) => {
    // console.log(job)
    const { job_title, max_price, min_price, deadline, description } = job || {}
    return (
        <div className="border-2 flex-col space-y-3 p-3">
            <h2 className="text-2xl font-semibold">{job_title}</h2>
            <h6 className="text-xl font-bold">Job description: <p className="text-sm">{description}</p></h6>

            <p>Maximum price: {max_price}</p>
            <p>Minimum price: {min_price}</p>

            <p className="flex items-center gap-2">Deadline:<BsStopwatchFill className="text-blue-800"></BsStopwatchFill> {deadline}</p>

            <button className="btn btn-lg">Bid now</button>
        </div>
    );
};

export default Job;