import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import BidReq from "../Components/BidReq";
import axios from "axios";
import { Link } from "react-router-dom";
import addJobImg from "../assets/img/rear-view-adult-man-searching-new-job-working-writing-his-resume-laptop_662251-2153.jpg"

const BidRequests = () => {
    const [bidRequests, setBidRequests] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        // Fetch bid requests data from the backend API
        fetch(`http://localhost:5000/api/v1/job/ownerReq?ownerEmail=${user.email}`)
            .then((response) => response.json())
            .then((data) => setBidRequests(data));
    }, [user]);
    // console.log(bidRequests)

    const HandelAccept = (id) => {
        const data = { status: 'confirm' }
        axios.put(`http://localhost:5000/api/v1/jobs/apply/${id}`, data)
            .then(res => console.log(res.data))

    }
    // http://localhost:5000/api/v1/job/ownerReq?ownerEmail=mama@mami.com
    const HandelReject = (id) => {
        const data = { status: 'Reject' }
        axios.put(`http://localhost:5000/api/v1/jobs/apply/${id}`, data)
            .then(res => console.log(res.data))
    }

    useEffect(() => {
        document.title = 'job-tex bidRequests'; // Set the desired page title
    }, []);


    return (


        <div>

            <div className="hero h-[70vh] mt-5 mb-12" style={{ backgroundImage: `url(${addJobImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md opacity-60">
                        <h1 className="text-3xl  font-bold mb-5">Post Your Job Hare</h1>
                        <div className=" text-xl font-bold flex justify-center items-center">
                            <button>
                                <Link to='/'>Home</Link></button>/
                            <button>
                                <Link to='/register'>Register</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table container mx-auto my-12">
                {/* head */}
                <thead className='text-xl font-semibold text-primary'>
                    <tr>

                        <th>Email</th>
                        <th>Job title</th>
                        <th>Deadline</th>
                        {/* <th>Status</th> */}
                        <th>Accept</th>
                        <th>Reject</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        bidRequests?.map(job => <BidReq key={job._id} job={job}
                            HandelAccept={HandelAccept} HandelReject={HandelReject}

                        ></BidReq>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default BidRequests;