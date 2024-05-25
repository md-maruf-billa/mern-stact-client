import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa6';
import { VscEye } from "react-icons/vsc";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { studentDataContext } from '../Provider/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import ButtonLoader from '../../Shared/ButtonLoader/ButtonLoader';



const Login = () => {

    //---------Get Data form context--------------
    const { loginAccountUsingEmail } = useContext(studentDataContext);

    const [eye, setEye] = useState(true);
    const [progress,setProgress] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit
    } = useForm()
    const handelLogin = (data) => {
        loginAccountUsingEmail(data.email, data.password)
            .then(res => {
                Swal.fire({
                    title: "Congratulation",
                    text: "You are successfully Logged In.",
                    icon: "success"
                });
                setProgress(false);
                navigate(location.state ? location.state : "/")
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect username or password.",
                    footer: ''
                });
            })
    }
    // ----------------Handel Password Showing---------
    const handelEye = () => {
        setEye(!eye);
    }
    // --------Handel google login------
    // const handelSocialLogin = (socialAccount) => {
    //     if (socialAccount === 'google') {
    //         googleLogin()
    //             .then(res => {
    //                 Swal.fire({
    //                     title: "Congratulation",
    //                     text: "You are successfully Logged In.",
    //                     icon: "success"
    //                 });
    //             })
    //             .catch(err => {
    //                 Swal.fire({
    //                     icon: "error",
    //                     title: "Oops...",
    //                     text: `${err.message.split("/")[1].replace(")", "")}`,
    //                     footer: ''
    //                 });
    //             })
    //     }
    //     else if (socialAccount === "github") {
    //         gitHubLogin()

    //             .then(res => {
    //                 Swal.fire({
    //                     title: "Congratulation",
    //                     text: "You are successfully Logged In.",
    //                     icon: "success"
    //                 });
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //                 Swal.fire({
    //                     icon: "error",
    //                     title: "Oops...",
    //                     text: `${err.message.split("/")[1].replace(")", "")}`,
    //                     footer: ''
    //                 });
    //             })
    //     }
    //     else if (socialAccount === "faceBook") {
    //         faceBookLogin()

    //             .then(res => {
    //                 Swal.fire({
    //                     title: "Congratulation",
    //                     text: "You are successfully Logged In.",
    //                     icon: "success"
    //                 });
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //                 Swal.fire({
    //                     icon: "error",
    //                     title: "Oops...",
    //                     text: `${err.message.split("/")[1].replace(")", "")}`,
    //                     footer: ''
    //                 });
    //             })
    //     }

    // }
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-[calc(100vh-345px)] mt-[68px] mb-5 flex justify-center items-center container mx-auto text-black px-2 md:px-0'>
            {/* ------------------Page title---------- */}

            <form onSubmit={handleSubmit(handelLogin)} className='px-10 md:px-14 py-10 rounded-lg border-2 border-[#FF76CE]' >
                {/* <h3 className='text-center text-5xl mb-10 text-[#FF76CE] font-rancho'>Login Now</h3> */}
                <div className='flex justify-center items-center mb-5'>
                    <img className='size-[150px]' src="./LOGO.png" alt="" />
                </div>

                <div className='flex flex-col md:w-[400px] gap-12'>
                    <input {...register("email")} className='dark:text-white border-b-2 outline-none bg-transparent' required type="email" placeholder='Username or Email' />

                    <div className='relative'>
                        <input {...register("password")} className='dark:text-white border-b-2 outline-none bg-transparent w-full' required type={`${eye ? "password" : "text"}`} placeholder='Password' />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            {
                                eye ? <VscEye onClick={handelEye} className='text-2xl text-[#5a5a5a] cursor-pointer'></VscEye> :
                                    <FaEyeSlash onClick={handelEye} className='text-xl text-[#5a5a5a] cursor-pointer'></FaEyeSlash>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex items-center gap-2'>
                        <input className='cursor-pointer' type="checkbox" name="" />
                        <p className='text-xs md:text-base dark:text-white'>Remember Me</p>
                    </div>
                    <div>
                        <Link className='text-xs md:text-base text-[#FF76CE]'>Forget Password?</Link>
                    </div>
                </div>
                <button
                    onClick={()=>setProgress(true)}
                    type='submit'
                    className='btn w-full bg-[#FF76CE] text-white font-semibold border-none outline-none mt-12 flex gap-3'>
                        {progress && <ButtonLoader/>}
                    <span>Login</span>
                </button>
                <p className='text-center mt-4 text-xs md:text-base dark:text-white'>Don’t have an account? <Link className='text-[#FF76CE]' to={"/registration"}>Create an account</Link></p>



                <div className='flex items-center gap-2 mt-5'>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                    <p>OR</p>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                </div>
                <div className='flex gap-5 justify-center items-center mt-5'>
                    <FcGoogle onClick={() => handelSocialLogin('google')} className='text-4xl cursor-pointer'></FcGoogle>
                    <FaFacebook onClick={() => handelSocialLogin('faceBook')} className='text-4xl cursor-pointer text-blue-600'></FaFacebook>
                    <FaGithub onClick={() => handelSocialLogin('github')} className='text-4xl cursor-pointer'></FaGithub>
                    <FaTwitter onClick={() => handelSocialLogin('twitter')} className='text-4xl cursor-pointer text-blue-400'></FaTwitter>
                </div>
            </form>
        </div>
    );
};

export default Login;