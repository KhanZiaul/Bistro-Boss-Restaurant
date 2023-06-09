import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaUsers } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { RiReservedLine } from 'react-icons/ri';
import { MdPayment, MdOutlinePreview } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';
import { AiOutlineMenuFold, AiFillShopping, AiFillContacts } from 'react-icons/ai';
import { GiKitchenKnives } from 'react-icons/gi';
import useCart from "../Hooks/useCart/useCart";
import useAdmin from "../Hooks/useAdmin/useAdmin";


const DashboardLayout = () => {

    const [cart] = useCart()
    const [isAdmin] = useAdmin()


    return (
        <div className="drawer drawer-mobile gap-5 lg:my-8">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <div className="w-36 mx-auto my-5">
                    <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] drawer-button lg:hidden">Open Nabvar</label>
                </div>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 lg:p-4 w-[60%] lg:w-full text-base-content space-y-4 bg-[#D1A054]">
                    <h2 className="text-2xl font-bold mb-6">BISTRO BOSS <br /> Restaurant</h2>

                    {
                        isAdmin ?

                            <>
                                <NavLink
                                    to='/dashboard/adminHome'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <FiHome></FiHome> <span>ADMIN HOME</span>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to='/dashboard/addItem'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <GiKitchenKnives></GiKitchenKnives> <span>ADD ITEMS</span>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to='/dashboard/manageItems'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <AiOutlineMenuFold></AiOutlineMenuFold> <span>MANAGE ITEMS</span>
                                    </div>
                                </NavLink>

                                {/* <NavLink
                                    to="/dashboard/manageBookings"
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <MdOutlinePreview></MdOutlinePreview> <span>MANAGE BOOKINGS</span>
                                    </div>
                                </NavLink> */}
                                <NavLink
                                    to="/dashboard/allUsers"
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <FaUsers></FaUsers> <span>ALL USERS</span>
                                    </div>
                                </NavLink>
                            </>

                            :

                            <>
                                <NavLink
                                    to='/dashboard/userHome'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <FiHome></FiHome> <span>USER HOME</span>
                                    </div>
                                </NavLink>
                                {/* <NavLink
                                    to='/dashboard/reservation'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <RiReservedLine></RiReservedLine> <span>RESERVATION</span>
                                    </div>
                                </NavLink> */}
                                <NavLink
                                    to='/dashboard/payment'
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <MdPayment></MdPayment> <span>PAYMENT HISTORY</span>
                                    </div>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/mycart"
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <FaShoppingCart className="w-5 h-5 text-secondary"></FaShoppingCart>
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div> <span>MY CART</span>
                                    </div>
                                </NavLink>
                                {/* <NavLink
                                    to="/dashboard/review"
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <MdOutlinePreview></MdOutlinePreview> <span>ADD REVIEW</span>
                                    </div>
                                </NavLink> */}
                                {/* <NavLink
                                    to="/dashboard/booking"
                                    className={({ isActive }) => isActive ? "active" : ""
                                    }
                                >
                                    <div className="flex items-center gap-2">
                                        <TbBrandBooking></TbBrandBooking> <span>MY BOOKING</span>
                                    </div>
                                </NavLink> */}
                            </>
                    }


                    <div className="flex flex-col w-full">
                        <div className="divider"></div>
                    </div>

                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : ""
                        }
                    >
                        <div className="flex items-center gap-2">
                            <FiHome></FiHome> <span>HOME</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => isActive ? "active" : ""
                        }
                    >
                        <div className="flex items-center gap-2">
                            <AiOutlineMenuFold></AiOutlineMenuFold> <span>MENU</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/order/salad"
                        className={({ isActive }) => isActive ? "active" : ""
                        }
                    >
                        <div className="flex items-center gap-2">
                            <AiFillShopping></AiFillShopping><span>ORDER</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "active" : ""
                        }
                    >
                        <div className="flex items-center gap-2">
                            <AiFillContacts></AiFillContacts> <span>CONTACT</span>
                        </div>
                    </NavLink>

                </ul>

            </div >
        </div >
    );
};

export default DashboardLayout;