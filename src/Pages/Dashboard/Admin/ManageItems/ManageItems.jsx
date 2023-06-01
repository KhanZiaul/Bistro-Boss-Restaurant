import { BsTrash } from "react-icons/bs";
import Title from "../../../../Components/Title/Title";
import { BiEdit } from "react-icons/bi";
import useMenuData from "../../../../Hooks/useMenuData/useMenuData";
import axios from "axios";
import useAxiosSrcure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [allMenu, refetch] = useMenuData()
    const [axiosSecure] = useAxiosSrcure()

    function handleDelete(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        refetch()
                        console.log(res.data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div>
            <div className="mb-12">
                <Title
                    subTitle={"--- Hurry Up! ---"}
                    Title={"MANAGE ALL ITEMS"}>
                </Title>

            </div>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-[80%] mx-auto">
                        {/* head */}
                        <thead >
                            <tr >
                                <th className="bg-[#D1A054] text-white">#</th>
                                <th className="bg-[#D1A054] text-white">ITEM IMAGE</th>
                                <th className="bg-[#D1A054] text-white">ITEM NAME</th>
                                <th className="bg-[#D1A054] text-white">PRICE</th>
                                <th className="bg-[#D1A054] text-white">ACTION</th>
                                <th className="bg-[#D1A054] text-white">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMenu?.map((menu, index) => {
                                    return (
                                        <>
                                            <tr key={menu._id}>
                                                <th>
                                                    {
                                                        index + 1
                                                    }
                                                </th>
                                                <td>
                                                    <img src={menu.image} className="w-12 h-12 rounded-full" alt="" />
                                                </td>
                                                <td className="font-semibold">
                                                    {
                                                        menu.name
                                                    }
                                                </td>
                                                <td className="text-left">
                                                    ${
                                                        menu.price
                                                    }
                                                </td>
                                                <th>
                                                    <BiEdit className="text-white h-8 w-8 bg-[#D1A054] hover:bg-[#df8f17] cursor-pointer p-2 rounded-md"></BiEdit>
                                                </th>
                                                <th>
                                                    <button onClick={() => handleDelete(menu._id)} className="btn btn-ghost btn-xs btn-lg"><BsTrash className="text-red-600"></BsTrash> </button>
                                                </th>
                                            </tr>
                                        </>
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

export default ManageItems;