import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Table from "../Components/Table";
import axios from "axios";
import { Link } from "react-router-dom";

import addJobImg from "../assets/img/businessman-excited-because-achievement-business_1163-5344.jpg"

const MyBids = () => {
    const [apply, setApply] = useState()
    const { user } = useAuth()
    const email = user.email

    useEffect(() => {
        document.title = 'job-tex myBids'; // Set the desired page title
    }, []);



    useEffect(() => {

        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/job/myReq?email=${email}`)
                setApply(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [email])


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
                        <th>Complete</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        apply?.map(job => <Table key={job._id} job={job} ></Table>)
                    }
                </tbody>

            </table>
        </div>


    );
};

export default MyBids;