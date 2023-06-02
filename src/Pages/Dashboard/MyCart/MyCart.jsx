import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart/useCart";
import { BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";

const MyCart = () => {

    const [cart , refetch] = useCart()

    const payment = cart.reduce((initial , final)=> initial + parseFloat(final.price) ,0)
    console.log(payment)

    function deleteHandler(id) {
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

                fetch(`http://localhost:7000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })
            }
        })
    }

    return (
        <div className="mt-12">

            <div className="flex justify-center gap-6 my-5">
                <p className="text-xl font-semibold">Total : ${payment}</p>
                <Link to='/dashboard/payment'><button className="btn btn-sm bg-[#D1A054]">Pay</button></Link>
            </div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-[80%] mx-auto">
                    {/* head */}
                    <thead >
                        <tr >
                            <th className="bg-[#D1A054] text-white"></th>
                            <th className="bg-[#D1A054] text-white">ITEM IMAGE</th>
                            <th className="bg-[#D1A054] text-white">ITEM NAME</th>
                            <th className="bg-[#D1A054] text-white">PRICE</th>
                            <th className="bg-[#D1A054] text-white">ACTIVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((singleCart, index) => {
                                return (
                                    <tr key={index}>
                                        <th>
                                            {
                                                index + 1
                                            }
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleCart.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-semibold">
                                            {singleCart.name}
                                        </td>
                                        <td className="text-left">${singleCart?.price}</td>
                                        <th>
                                            <button onClick={() => deleteHandler(singleCart._id)} className="btn btn-ghost btn-xs btn-lg"><BsTrash className="text-red-600"></BsTrash> </button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;