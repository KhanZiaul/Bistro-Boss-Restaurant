import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart/useCart";


const TabCard = ({ item }) => {

    const { image, _id, name, recipe, price } = item
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [,refetch] = useCart()

    function cartHandler() {
        const cartData = { cartID: _id, image, name, email: user?.email, price }
        if (user && user.email) {

            fetch(`https://bistro-boss-server-khanziaul.vercel.app/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'ADDED IN THE CART',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    refetch()
                })
        }
        else {
            Swal.fire({
                title: 'Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : {from : location}})
                    Swal.fire(
                        'WELCOME TO LOGIN PAGE',
                    )
                }
            })
        }
    }

    return (
        <div className="card w-full lg:h-[96] lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="item" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => cartHandler(item)} className="btn btn-outline bottom-0 border-b-4 block mx-auto">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default TabCard;