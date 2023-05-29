import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useCart from "../../../Hooks/useCart/useCart";
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    function logOutHandler() {
        logOut().then(() => {
        }).catch((error) => {
        })
    }

    const liList = <>
        <li><Link>HOME</Link></li>
        <li><Link>CONTACT US</Link></li>
        <li><Link>  DASHBOARD</Link></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/private'>PRIVATE</Link></li>
        <li><Link to='/order/salad'>ORDER</Link></li>
        <li><Link to='/dashboard/mycart'>
            <button className="btn gap-2">
                <FaShoppingCart className="w-8 h-8 text-secondary"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {user ? <li>
           <span> <Link onClick={logOutHandler} className="btn bg-slate-600">Logout</Link></span>
        </li>
            :
            <li>
                <Link to='/login' className="btn bg-slate-600">Login</Link>
            </li>
        }
    </>

    return (

        <div className="navbar bg-black text-black lg:text-white fixed z-20  opacity-75 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            liList
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl text-white">BISTRO BOSS</Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        liList
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;