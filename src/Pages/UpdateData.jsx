import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../Hooks/useAuth";
import addJobImg from '../assets/img/programming-languages-code-with-person-laptop_102583-4787.avif';
import { useEffect } from "react";





const UpdateData = () => {
    const data = useLoaderData()
    const { _id, maxPrice, minPrice, title, deadline, description } = data || {}
    console.log(data)
    const { user } = useAuth()
    const HandelUpdate = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const deadline = e.target.deadline.value
        const description = e.target.description.value
        const maxPrice = e.target.maxPrice.value

        const minPrice = e.target.minPrice.value

        const email = e.target.email.value
        const brand = e.target.brand.value


        const jobInfo = {
            title,
            deadline,
            description,
            maxPrice,
            minPrice,
            email,
            brand

        }
        console.log(jobInfo)
        // send data to server
        axios.put(`http://localhost:5000/api/v1/jobs/${_id}`, jobInfo)
            .then(response => {
                console.log('Job posted successfully:', response.data);
                if (response?.data?.modifiedCount > 0) {
                    swal("Success", "Job added successfully");
                }
            })
            .catch(error => {
                console.error('Error posting job:', error);
                swal("Error", "Please try again");
            });
    }

    useEffect(() => {
        document.title = 'job-tex update'; // Set the desired page title
    }, []);


    return (
        <div>
            <div className="hero h-[50vh] mt-5 mb-12" style={{ backgroundImage: `url(${addJobImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md opacity-60">
                        <h1 className="text-3xl  font-bold mb-5">Post Your Job Hare</h1>
                        <div className=" text-xl font-bold flex justify-center items-center">
                            <button>
                                <Link to='/'>Home</Link></button>/
                            <button>
                                <Link to='/myPostedJob'>My posted job</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-teal-100 p-4 container mx-auto ">


                <div className="w-5/6 md:w-2/3 lg:4/3 mx-auto my-12 ">
                    <form onSubmit={HandelUpdate} className="mt-7">
                        {/* name and Quantity*/}
                        <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Job title</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" defaultValue={title} required placeholder="Job title"
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            {/* deadline */}
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="deadline" required placeholder="Deadline" defaultValue={deadline}
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            {/* Description */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text"> Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" required defaultValue={description} placeholder="Description "
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            {/* maxPrice  */}
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text"> Maximum price
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="maxPrice" required defaultValue={maxPrice} placeholder="$ Maximum price
"
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            {/* Minimum price*/}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Minimum price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="minPrice" required placeholder="$ Minimum price" defaultValue={minPrice}
                                        className="input input-bordered w-full" />
                                </label>
                                {/* <p>{text}</p> */}
                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label required placeholder="Select one" className=" border rounded-r-lg w-full">
                                    <select name="brand" className="select  w-full">
                                        <option value="web-development">web development</option>
                                        <option value="digital-marketing">digital marketing</option>
                                        <option value="graphics-design">graphics design</option>

                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" disabled
                                    defaultValue={user?.email} required placeholder="Email"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <input type="submit" value="Update job" className="btn mt-4 btn-block bg-violet-800 text-white font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;