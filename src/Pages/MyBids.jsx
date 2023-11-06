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
        <div className="my-12">
            {
                applyJobs?.map(job => <Table key={job._id} job={job}></Table>)
            }
        </div>
    );
};

export default MyBids;