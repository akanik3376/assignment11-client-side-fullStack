/* eslint-disable react/prop-types */
import axios from "axios";
import { BsCurrencyDollar, BsStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostJobCard = ({ job }) => {
    // console.log(job)

    const { job_title, max_price, min_price, deadline, description, _id } = job || {}



    const HandelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/api/v1/jobs/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Job has been deleted.',
                                    'success'
                                )
                            }
                        });
                }
            });
    }

    // const HandelUpdate = (id) => {
    //     axios.put(`http://localhost:5000/api/v1/jobs/${id}`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .then(error => console.log(error))
    // }


    return (
        <div className="border-2 flex-col space-y-3 p-3 hover:bg-teal-100 rounded-lg">
            <div className="flex-col space-y-3 p-3 overflow-hidden">
                <h2 className="text-2xl font-semibold">{job_title}</h2>
                <h6 className="text-xl font-bold">Job description: <p className="text-sm">{description}</p></h6>

                <p className="flex items-center font-semibold">Maximum price:<BsCurrencyDollar></BsCurrencyDollar>{max_price}</p>
                <p className="flex items-center font-semibold">Minimum price:<BsCurrencyDollar></BsCurrencyDollar>{min_price}</p>

                <p className="flex items-center font-semibold gap-2">Deadline:<BsStopwatchFill className="text-blue-800"></BsStopwatchFill> {deadline}</p>

            </div>
            <div className="flex justify-between ">
                <button onClick={() => HandelDelete(_id)} className="py-3 px-5 border-2 border-teal-500 rounded-lg mr-3  text-white font-bold hover:bg-teal-300">Delete</button>
                {/* <Link >
                    <button onClick={() => HandelUpdate(_id)} className="py-3 px-5 border-2 border-teal-500 rounded-lg mr-3 text-white font-bold bg-teal-300">Update</button>
                </Link> */}
            </div>
        </div>
    );
};

export default PostJobCard;