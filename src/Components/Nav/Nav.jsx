import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { studentDataContext } from '../../Pages/Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Nav = () => {
    const { currentUser, logOut } = useContext(studentDataContext);

    //--------------LOG OUT USER--------------
    const logOutUser = () => {
        logOut()
            .then(res => {
                let timerInterval;
                Swal.fire({
                    title: "Successful..",
                    html: "You are logeded out.",
                    timer: 1500,
                    timerProgressBar: true,
                    icon:"success",
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        
                    }
                });
            })
    }




    //------------COMMON NAV ICON--------------
    const navMenu = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li>
            <NavLink to={"/classes"}>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="">Students</div>
                    <ul tabIndex={0} className="dropdown-content bg-[rgba(0,0,0,0.7)] z-[1] menu p-2 shadow  rounded-box w-52">
                        <li><a>Class-1</a></li>
                        <li><a>Class-2</a></li>
                        <li><a>Class-3</a></li>
                        <li><a>Class-4</a></li>
                        <li><a>Class-5</a></li>

                    </ul>
                </div>
            </NavLink>
        </li>
        {/* <li><NavLink to={"/classes"}>Classes</NavLink></li> */}
        <li><NavLink to={"/teachers"}>Teachers</NavLink></li>
        <li><NavLink to={"/blogs"}>Blog's</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
    </>


    return (
        <div className='w-full fixed top-0 z-50 bg-[rgba(0,0,0,0.4)] text-white'>
            <div className="navbar bg-transparent container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to={"/"} className="text-xl font-rancho">EDUCATOR</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        currentUser ? <>
                            <div className="dropdown dropdown-end text-black">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={currentUser.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logOutUser}><a>Logout</a></li>
                                </ul>
                            </div>

                        </> : <>

                            <Link to={"/login"}>
                                <button className='btn btn-success'>Login</button>
                            </Link>
                        </>
                    }
                </div>
            </div >
        </div >
    );
};

export default Nav;