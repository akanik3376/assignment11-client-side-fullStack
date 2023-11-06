/* eslint-disable react/prop-types */
import axios from "axios";
import useAuth from "../Hooks/useAuth";


const BidSection = ({ job }) => {
    // console.log(job)
    const { user } = useAuth()
    const { job_title, deadline } = job || {}
    const status = false


    const handelAddJob = (e) => {
        e.preventDefault()
        const price = e.target.price.value
        const bidDeadline = e.target.deadline.value

        const biderEmail = e.target.biderEmail.value
        const ownerEmail = e.target.ownerEmail.value


        // const jobInfo = {
        //     price,
        //     deadline,

        //     biderEmail,
        //     ownerEmail
        // }
        const bidInfo = {
            biderEmail, job_title, deadline, status, price,
            bidDeadline, ownerEmail
        }
        // console.log(user.email)
        // send data to server

        axios.post(`http://localhost:5000/api/v1/jobs/apply?email=${user.email}`, bidInfo)
            .then(response => {
                console.log('Job posted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error posting job:', error);
            });
    }


    return (
        <div className="my-12">
            <h1 className="text-5xl font-semibold text-center">
                Place your bid form hare
            </h1>

            <div className="mt-8">
                <form onSubmit={handelAddJob} className="mt-7">
                    {/* name and Quantity*/}
                    <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Your Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="Your Price"
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
                        {/* job owner */}
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Job owner email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="ownerEmail" disabled
                                    defaultValue={job?.email} placeholder="Email"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* who bid for this job */}
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="biderEmail" disabled
                                    defaultValue={user?.email} placeholder="Email"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value=" Bid on the project " className="btn mt-4 btn-block bg-violet-800 text-white font-bold" />
                </form>
            </div>
        </div>
    );
};

export default BidSection;