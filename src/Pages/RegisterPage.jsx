// import { useState } from "react";
// import useAuth from "../Hooks/useAuth";

const RegisterPage = () => {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const { createUser, user } = useAuth()


    const HandelRegister = async (e) => {
        e.preventDefault()
        // get form input value with state and onBlur={(e) => setEmail(e.target.value)} fusion

        // create user hare and send email,and password as a prop

        // try {
        //     await createUser(email, password)
        //     console.log('created', user)
        // } catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={HandelRegister}
                        className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* onBlur={(e) => setEmail(e.target.value)} */}
                            <input
                                type="email" name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* onBlur={(e) => setPassword(e.target.value)} */}
                            <input
                                type="password" name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;