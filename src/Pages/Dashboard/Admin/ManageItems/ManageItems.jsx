import { BsTrash } from "react-icons/bs";
import Title from "../../../../Components/Title/Title";
import { BiEdit } from "react-icons/bi";


const ManageItems = () => {
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


                            <tr >
                                <th>

                                </th>
                                <td>

                                </td>
                                <td className="font-semibold">

                                </td>
                                <td className="text-left">

                                </td>
                                <th>
                                    <BiEdit className="text-white h-8 w-8 bg-[#D1A054] hover:bg-[#df8f17] cursor-pointer p-2 rounded-md"></BiEdit>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs btn-lg"><BsTrash className="text-red-600"></BsTrash> </button>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;