import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Table from "../Components/Table";
import { useLoaderData } from "react-router-dom";

const MyBids = () => {
    const [apply, setApply] = useState()
    const { user } = useAuth()
    const email = user.email
    const applyJobs = useLoaderData()
    console.log(applyJobs)



    useEffect(() => {
        const applyJob = applyJobs?.filter(job => job.email === email)
        setApply(applyJob)
    }, [email, applyJobs])

    return (



        <table className="table container mx-auto my-12">
            {/* head */}
            <thead className='text-xl font-semibold text-primary'>
                <tr>
                    <th>Image</th>
                    <th>Donator Name</th>
                    <th>Expired Date</th>
                    <th>request_date</th>

                </tr>
            </thead>
            <tbody >
                {
                    apply?.map(job => <Table key={job._id} job={job}></Table>)
                }
            </tbody>

        </table>
    );
};

export default MyBids;