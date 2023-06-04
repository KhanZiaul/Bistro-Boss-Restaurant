import { FaCreditCard, FaUsers, FaCarSide } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import './AdminHome.css'

const AdminHome = () => {
    return (
        <div>
            <h2>Admin Home</h2>

            <div className="stats shadow">

                <div className="stat revenue text-white">
                    <div className="stat-figure">
                        <FaCreditCard className='w-6 h-6'></FaCreditCard>
                    </div>
                    <div className="text-2xl font-semibold">Revenue</div>
                    <div className="text-2xl font-semibold">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-[#D1A054]">
                        <FaUsers className='w-6 h-6'></FaUsers>
                    </div>
                    <div className="text-2xl font-semibold">Customers</div>
                    <div className="text-2xl font-semibold">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-[#D1A054]">
                        <SiCodechef className='w-6 h-6'></SiCodechef>
                    </div>
                    <div className="text-2xl font-semibold">Products</div>
                    <div className="text-2xl font-semibold">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-[#D1A054]">
                        <FaCarSide className='w-6 h-6'></FaCarSide>
                    </div>
                    <div className="text-2xl font-semibold">Revenue</div>
                    <div className="text-2xl font-semibold">31K</div>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;