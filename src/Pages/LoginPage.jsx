import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import bgImg from "../assets/img/pair-pencils-wireless-keyboard-smartphone_140725-8962.jpg"

const LoginPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { googleLogin, LoginUser, user } = useAuth()

    const HandelGoogleLogin = () => {
        googleLogin()

        navigate(location?.state ? location.state : '/')

    }

    const HandelLogin = async (e) => {
        e.preventDefault()
        // get form input value with state and onBlur={(e) => setEmail(e.target.value)} fusion

        // create user hare and send email,and password as a prop

        try {
            await LoginUser(email, password)
            if (user?.accessToken) {
                swal("user login success fully")
                navigate(location?.state ? location.state : '/')
            }


        } catch (err) {
            swal("error ! please try again")
        }
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',  // Adjust as needed
        backgroundPosition: 'center',  // Adjust as needed
        // Other background properties, if needed
    };

    return (
        <div className="container mx-auto my-12" style={backgroundImageStyle}>


            <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
                <form onSubmit={HandelLogin}
                    className="card-body flex flex-col" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        {/*  */}
                        <input onBlur={(e) => setEmail(e.target.value)}
                            type="email" name="email"
                            placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        {/* */}
                        <input onBlur={(e) => setPassword(e.target.value)}
                            type="password" name="password"
                            placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit"
                            className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="flex justify-center items-center">Don`t have account ? please <span className="ml-3">
                        <Link to='/register' className="text-blue-700 font-bold underline">Register</Link ></span></p>

                    <div className="flex justify-center items-center mt-5 gap-5 text-2xl font-bold">
                        <p className=" border-2 border-blue-500"></p>
                        <span className="text-gray-700">
                            X
                        </span>
                        <p className=" border-2 border-blue-500"></p>
                    </div>

                    <div className="flex justify-center  gap-2 ">
                        <div className="border-b-2 pb-2 flex items-center border-blue-500">
                            <h3 className="font-semibold border text-2xl">Login with </h3>
                            <button onClick={HandelGoogleLogin} className="text-2xl flex items-center gap-2 ">
                                <span className="text-2xl font-bold">
                                    Google </span><FcGoogle></FcGoogle></button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;