// import { useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth";

const AddJob = () => {
    const { user } = useAuth()

    // const [text, setText] = useState()

    const handelAddJob = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const deadline = e.target.deadline.value
        const description = e.target.description.value
        const maxPrice = e.target.maxPrice.value

        const minPrice = e.target.minPrice.value

        const email = e.target.email.value


        const jobInfo = {
            title,
            deadline,
            description,
            maxPrice,
            minPrice,
            email
        }
        console.log(jobInfo)
        // send data to server
        axios.post('http://localhost:5000/api/v1/jobs', jobInfo)
            .then(response => {
                console.log('Job posted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error posting job:', error);
            });
    }



    return (
        <div className="w-5/6 md:w-2/3 lg:4/3 mx-auto my-12">
            <form onSubmit={handelAddJob} className="mt-7">
                {/* name and Quantity*/}
                <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Job title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Job title"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* deadline */}
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="Deadline"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Description */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description "
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
                            <input type="number" name="maxPrice" placeholder="$ Maximum price
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
                            <input type="number" name="minPrice" placeholder="$ Minimum price"
                                className="input input-bordered w-full" />
                        </label>
                        {/* <p>{text}</p> */}
                    </div>

                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className=" border rounded-r-lg w-full">
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
                            defaultValue={user?.email} placeholder="Email"
                            className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add job" className="btn mt-4 btn-block bg-violet-800 text-white font-bold" />
            </form>
        </div>
    );
};

export default AddJob;