import { useQuery } from "@tanstack/react-query";
import { BsTrash } from "react-icons/bs";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSrcure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";


const AllUsers = () => {
    const  [axiosSecure] = useAxiosSrcure()

    const { refetch, data: loggedUsers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })

    function updateUserHandler(id) {
        console.log(id)

        fetch(`http://localhost:7000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'New Admin Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    function deleteUSerHandler() {

    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-[80%] mx-auto">
                        {/* head */}
                        <thead >
                            <tr >
                                <th className="bg-[#D1A054] text-white"></th>
                                <th className="bg-[#D1A054] text-white">NAME</th>
                                <th className="bg-[#D1A054] text-white">EMAIL</th>
                                <th className="bg-[#D1A054] text-white">ROLE</th>
                                <th className="bg-[#D1A054] text-white">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loggedUsers?.map((loggedUser, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>
                                                {
                                                    index + 1
                                                }
                                            </th>
                                            <td>
                                                {loggedUser.name}
                                            </td>
                                            <td className="font-semibold">
                                                {loggedUser.email}
                                            </td>
                                            <td className="text-left">
                                                {
                                                    loggedUser.role ? <FaUserAlt></FaUserAlt> : <FaUsers onClick={() => updateUserHandler(loggedUser._id)} className="text-white h-8 w-8 bg-[#D1A054] hover:bg-[#df8f17] cursor-pointer p-2 rounded-md"></FaUsers>
                                                }
                                            </td>
                                            <th>
                                                <button onClick={() => deleteUSerHandler(loggedUser._id)} className="btn btn-ghost btn-xs btn-lg"><BsTrash className="text-red-600"></BsTrash> </button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;