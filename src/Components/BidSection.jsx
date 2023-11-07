/* eslint-disable react/prop-types */
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import bannerImg from "../assets/img/advertising-template-design-with-people-are-working-from-home-home-office-concept-watercolor-vector-illustration_83728-2861.jpg"
import swal from "sweetalert";


const BidSection = ({ job }) => {
    // console.log(job)
    const { user } = useAuth()
    const { job_title, deadline } = job || {}
    const status = false
    const email = user?.email

    const handelAddJob = (e) => {
        e.preventDefault()
        const price = e.target.price.value
        const bidDeadline = e.target.deadline.value

        // const biderEmail = e.target.biderEmail.value
        const ownerEmail = e.target.ownerEmail.value

        const bidInfo = {
            email, job_title, deadline, status, price,
            bidDeadline, ownerEmail,

        }


        axios.post(`http://localhost:5000/api/v1/jobs/apply/user/request`, bidInfo)
            .then(response => {
                console.log('Job posted successfully:', response.data);
                if (response?.data?.insertedId) {
                    swal("Success", "Job Bid successfully");
                }
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
            <div className="container mx-auto my-8">
                <img className="h-[50vh] object-cover w-full" src={bannerImg} alt="" />
            </div>



            <div className="mt-8">
                <form onSubmit={handelAddJob} className="mt-7 bg-teal-100">
                    {/* name and Quantity*/}
                    <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Your Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" required placeholder="Your Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* deadline */}
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="deadline" required placeholder="Deadline"
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
                                    defaultValue={job?.email} required placeholder="Email"
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
                                    defaultValue={user?.email} required placeholder="Email"
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