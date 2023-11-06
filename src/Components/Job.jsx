/* eslint-disable react/prop-types */

import { BsStopwatchFill, BsCurrencyDollar } from "react-icons/bs";
import { Link, } from "react-router-dom";

const Job = ({ job }) => {

    // const jobs = useLoaderData()
    const { job_title, max_price, min_price, deadline, description, _id } = job || {}



    // const HandelDeities = (id) => {

    //     const Details = jobs.find(job => job._id === id)

    //     console.log(Details)
    // }

    return (
        <div className="border-2 flex-col space-y-3 p-3">
            <h2 className="text-2xl font-semibold">{job_title}</h2>
            <h6 className="text-xl font-bold">Job description: <p className="text-sm">{description}</p></h6>

            <p className="flex items-center font-semibold">Maximum price:<BsCurrencyDollar></BsCurrencyDollar>{max_price}</p>
            <p className="flex items-center font-semibold">Minimum price:<BsCurrencyDollar></BsCurrencyDollar>{min_price}</p>

            <p className="flex items-center font-semibold gap-2">Deadline:<BsStopwatchFill className="text-blue-800"></BsStopwatchFill> {deadline}</p>

            <Link to={`/details/${_id}`}>
                <button
                    className="btn btn-sm btn-success text-white font-bold">Bid now</button>
            </Link>

        </div>
    );
};

export default Job;