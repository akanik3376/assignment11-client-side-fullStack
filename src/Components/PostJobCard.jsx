/* eslint-disable react/prop-types */

import { BsCurrencyDollar, BsStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PostJobCard = ({ job, HandelDelete }) => {
    const { user } = useAuth()
    const { job_title, maxPrice, minPrice
        , deadline, description, _id, email } = job || {}


    return (
        <div className="border-2 flex-col space-y-3 p-3 hover:bg-teal-100 rounded-lg">
            <div className="flex-col space-y-3 p-3 overflow-hidden">
                <h2 className="text-2xl font-semibold">{job_title}</h2>
                <h6 className="text-xl font-bold">Job description: <p className="text-sm">{description}</p></h6>

                <p className="flex items-center font-semibold">Maximum price:<BsCurrencyDollar></BsCurrencyDollar>{maxPrice}</p>
                <p className="flex items-center font-semibold">Minimum price:<BsCurrencyDollar></BsCurrencyDollar>{minPrice}</p>

                <p className="flex items-center font-semibold gap-2">Deadline:<BsStopwatchFill className="text-blue-800"></BsStopwatchFill> {deadline}</p>

            </div>
            <div className="flex justify-between ">


                {
                    user.email === email ? <button onClick={() => HandelDelete(_id)} className="py-2 px-5 border-2 border-teal-500 rounded-lg  font-bold text-teal-500 ">Delete</button>

                        : <button onClick={() => HandelDelete(_id)} className="py-2 px-5 border-2 disabled border-teal-500 rounded-lg  font-bold text-teal-500 ">Delete</button>

                }



                <Link to={`/update/${_id}`}

                    className="py-2 px-5 border-2 border-teal-500 rounded-lg   font-bold text-green-600">Update</Link>


            </div>
        </div>
    );
};

export default PostJobCard;