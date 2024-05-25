import React from 'react';
import useAxiosGlobal from '../../Hooks/useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

const Students = () => {
    const axiosGlobal = useAxiosGlobal();
    const { data: allStudent, isPending, isLoading } = useQuery({
        queryKey: ["All Student"],
        queryFn: async () => {
            const res = await axiosGlobal('/all-student')
            return res.data;
        }
    })
    if (isPending || isLoading) {
        return <Loader />
    }
    return (
        <div className='mt-[75px] container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Roll</th>
                            <th>Student Photo</th>
                            <th>Student Name</th>
                            <th>Class</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allStudent.map(student =>
                                <tr key={student.roll}>
                                    <th>{student.roll}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={student.studentPhotoUrl} alt="Student Image" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{student.studentName}</td>
                                    <td>{student.class}</td>
                                    <td className='flex justify-center'>

                                        <Link 
                                        state={student._id}
                                        to={"/details"}
                                        className='flex items-center gap-2 border justify-center px-4 py-2 rounded-md bg-green-500 text-white font-bold'>
                                        View Details
                                            <MdArrowOutward />
                                        </Link>
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;