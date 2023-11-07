import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Table from "../Components/Table";

const MyBids = () => {
    const [applyJobs, setApplyJobs] = useState()
    const { user } = useAuth()

    const url = `http://localhost:5000/api/v1/jobs/apply/user/request?email${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setApplyJobs(data)
            })
    }, [url])

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
                    applyJobs?.map(job => <Table key={job._id} job={job}></Table>)
                }
            </tbody>

        </table>
    );
};

export default MyBids;