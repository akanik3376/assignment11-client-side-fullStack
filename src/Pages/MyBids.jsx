import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Table from "../Components/Table";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const MyBids = () => {
    const [apply, setApply] = useState()
    const { user } = useAuth()
    const email = user.email
    const applyJobs = useLoaderData()
    // const { id } = useParams()

    useEffect(() => {
        const applyJob = applyJobs?.filter(job => job.email === email)
        setApply(applyJob)
    }, [email, applyJobs])

    const HandelConfirm = (id) => {
        console.log(id)

        axios.patch(`http://localhost:5000/api/v1/jobs/apply/user/request/${id}`,
            ({ status: 'confirm' }))
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    const remaining = applyJobs?.filter(job => job._id !== id)
                    const updated = applyJobs.find(job => job._id == id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setApply(newBooking)
                }
            })
    }


    return (



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
                    apply?.map(job => <Table key={job._id} job={job} HandelConfirm={HandelConfirm}></Table>)
                }
            </tbody>

        </table>
    );
};

export default MyBids;