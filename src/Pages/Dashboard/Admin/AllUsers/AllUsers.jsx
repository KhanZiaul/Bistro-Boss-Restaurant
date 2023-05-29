import { useQuery } from "@tanstack/react-query";
import { BsTrash } from "react-icons/bs";
import { FaUserAlt, FaUsers } from "react-icons/fa";


const AllUsers = () => {

    const { refetch, data: loggedUsers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:7000/users`)
            return res.json()
        }
    })

    console.log(loggedUsers)


    function updateUSerHandler() {

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
                                                    loggedUser.role ? <FaUserAlt></FaUserAlt> : <FaUsers></FaUsers>
                                                }
                                            </td>
                                            <th>
                                                <button onClick={() => updateUSerHandler(loggedUser._id)} className="btn btn-ghost btn-xs btn-lg"><BsTrash className="text-red-600"></BsTrash> </button>
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