import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../assets/img/pair-pencils-wireless-keyboard-smartphone_140725-8962.jpg"

const RegisterPage = () => {

    const [name, setName] = useState()
    const [url, setUrl] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { createUser, user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const HandelRegister = async (e) => {
        e.preventDefault()
        // get form input value with state and onBlur={(e) => setEmail(e.target.value)} fusion
        console.log(name, url, email, password)
        // create user hare and send email,and password as a prop
        setName('')
        setUrl('')
        setEmail('')
        setPassword('')





        if (password.length < 6) {
            swal("Password must be at list 6 character")
        }
        if (!/[A-Z]/.test(password)) {
            swal("Provide capital characters [A-Z]")
        }
        if (!/[@#$%^&+=!]/.test(password)) {
            swal("provide a contain special character [@#$%^&+=!]")
        }


        try {
            await createUser(email, password)
            if (user?.accessToken) {
                swal("user create success fully")
                navigate(location?.state ? location.state : '/')
            }

            // console.log('created', user)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        document.title = 'job-tex register';
    }, []);

    const backgroundImageStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    };


    return (
        <div className="container mx-auto my-12 " style={backgroundImageStyle}>


            <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
                <form onSubmit={HandelRegister}
                    className="card-body flex flex-col" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        {/*  */}
                        <input onBlur={(e) => setName(e.target.value)}
                            type="text" name="name"
                            placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        {/*  */}
                        <input onBlur={(e) => setUrl(e.target.value)}
                            type="photo" name="url"
                            placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <p className="flex justify-center items-center">Already have account ? please <span className="ml-3">
                        <Link to='/login' className="text-blue-700 font-bold underline">Sing in</Link ></span></p>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;