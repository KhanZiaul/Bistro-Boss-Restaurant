import { Link } from "react-router-dom";

const Nav = () => {

    const liList = <>
        <li><Link>HOME</Link></li>
        <li><Link>CONTACT US</Link></li>
        <li tabIndex={0}>
            <a className="justify-between">
                DASHBOARD
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><a>OUR MENU</a></li>
        <li><a>OUR SHOP</a></li>
        <Link className="btn bg-slate-600">Login</Link>
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