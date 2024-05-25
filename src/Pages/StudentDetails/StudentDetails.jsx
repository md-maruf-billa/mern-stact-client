import React from 'react';
import useAxiosGlobal from './../../Hooks/useAxiosGlobal';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';

const StudentDetails = () => {
    const globalAxios = useAxiosGlobal();
    const location = useLocation();

    const { data, isPending } = useQuery({
        queryKey: ["Specific student info"],
        queryFn: async () => {
            const res = await globalAxios.get(`/student/${location.state}`)
            return res.data;
        }
    })
    if (isPending) {
        return <Loader />
    }
    return (
        <div 
        
        className='max-w-[1000px] mx-auto mt-[90px] border p-10 rounded-lg bg-[url()] bg-opacity-95 bg-cover bg-no-repeat bg-center'>
            {/* -------------HEADER SECTION------ */}
            <div className='flex justify-between items-center'>
                <div className='w-[200px] h-[200px] border'>
                    <img src="./LOGO.png" alt="" />
                </div>
                <div className='text-center space-y-4'>
                    <h2 className='text-6xl font-rancho'>EDUCATOR SCHOOL</h2>
                    <div className='space-y-1 font-semibold'>
                        <p>T.T.C More, Kurigram</p>
                        <p>Phone : 01730-827996</p>
                        <p>E-mail : eng.marufbilla@gmail.com</p>
                        <p>Fax: 555445545</p>
                    </div>
                </div>
                <div className=' border'>
                    <img className='w-[150px] h-[200px]' src={data.studentPhotoUrl} alt="Student photo" />
                </div>
            </div>

            {/* -----------------------DETAILS PART--------------- */}
            <div className='flex justify-center items-center mt-5'>
                <h3 className='text-2xl font-bold border p-3 border-black rounded-lg'>STUDENT DETAILS FORM</h3>
            </div>
            <h3 className='bg-purple-200 p-2 text-xl font-semibold mt-8'>Student Information:</h3>

            <div className='flex justify-between items-center mt-3 '>
                <div className='space-y-2'>
                    <p><span className='font-bold'>Student Name:</span> {data.studentName}</p>
                    <p><span className='font-bold'>Father Name:</span> {data.fatherName}</p>
                    <p><span className='font-bold'>Mother Name:</span> {data.motherName}</p>
                </div>
                <div className='space-y-2'>
                    <p><span className='font-bold'>Date of Birth:</span> {data?.dateOfBirth || "null"}</p>
                    <p><span className='font-bold'>Roll No:</span> {data.roll}</p>
                    <p><span className='font-bold'>Registration No:</span> {data.registration}</p>
                </div>
            </div>

            <div className='*:border *:p-2 flex *:w-full mt-5 text-center'>
                <p><span className='font-bold'>Class: </span>{data.class}</p>
                <p><span className='font-bold'>Gender: </span>{data?.gender || "null"}</p>
                <p><span className='font-bold'>Nationality: </span>{data?.nationality || "null"}</p>
            </div>

            <div className='mt-8'>
                <h3 className='text-xl font-semibold bg-purple-200 p-2'>Additional Information:</h3>

                <div className='*:border *:p-2 flex *:w-full mt-5 text-center'>
                    <p><span className='font-bold'>Address: </span>{data.address}</p>
                    <p><span className='font-bold'>Phone: </span>{data?.phone || "null"}</p>
                    <p><span className='font-bold'>Blood Group: </span>{data?.bloodGroup || "null"}</p>
                </div>
                <div className='*:border *:p-2 flex *:w-full mt-5 text-center'>
                    <p><span className='font-bold'>Language: </span>{data?.language || "null"}</p>
                    <p><span className='font-bold'>Hobby: </span>{data?.hobby || "null"}</p>
                    <p><span className='font-bold'>Quota: </span>{data?.quota || "null"}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;