import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useLoaderData } from "react-router-dom";
import PostJobCard from "../Components/PostJobCard";
import img from '../assets/img/smiley-woman-desk-pointing-tablet_23-2148434687.jpg'
import Swal from "sweetalert2";


const MyPostedJob = () => {
    const { user } = useAuth()
    const [postJob, setPostJob] = useState()

    // load all data
    const data = useLoaderData()


    // load data for who post this job with find method

    useEffect(() => {
        const postJob = data.filter(data => data.email === user?.email)
        console.log(postJob)
        setPostJob(postJob)
    }, [data, user])


    // handel delete data
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
                                const remaining = postJob.filter(job => job._id !== id)
                                setPostJob(remaining)
                            }
                        });
                }
            });
    }


    return (
        <div className="mt-5 mb-12">
            <div className="hero h-[50vh]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="opacity-40 text-5xl font-bold text-center mb-6 text-blue-300">My posted jobs</h1>
                        <div className="opacity-40 flex justify-center items-center">
                            <Link className="text-white font-bold text-xl" to='/'>Home</Link>/
                            <Link className="text-white font-bold text-xl" to='/addJob'>Add job</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-12">
                {
                    postJob?.map(job => <PostJobCard key={job._id} job={job} HandelDelete={HandelDelete}>


                    </PostJobCard>)
                }
            </div>

        </div>
    );
};

export default MyPostedJob;