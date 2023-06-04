import { FaCreditCard, FaUsers, FaCarSide } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import './AdminHome.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import useAxiosSrcure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSrcure()

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['adminStats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/adminStats')
            return res.data
        }
    })
    console.log(stats)
    return (
        <div>
            <h2 className='text-2xl'>Welcome Back !! {user?.displayName}</h2>

            <div className="stats shadow mt-8">

                <div className="stat revenue text-white">
                    <div className="stat-figure">
                        <FaCreditCard className='w-6 h-6'></FaCreditCard>
                    </div>
                    <div className="text-2xl font-semibold">Revenue</div>
                    <div className="text-2xl font-semibold">{stats?.revenue}</div>
                </div>

                <div className="stat customers text-white">
                    <div className="stat-figure">
                        <FaUsers className='w-6 h-6'></FaUsers>
                    </div>
                    <div className="text-2xl font-semibold">Customers</div>
                    <div className="text-2xl font-semibold">{stats?.allUsers}</div>
                </div>

                <div className="stat products text-white">
                    <div className="stat-figure">
                        <SiCodechef className='w-6 h-6'></SiCodechef>
                    </div>
                    <div className="text-2xl font-semibold">Products</div>
                    <div className="text-2xl font-semibold">{stats?.products}
                    </div>
                </div>

                <div className="stat orders text-white">
                    <div className="stat-figure">
                        <FaCarSide className='w-6 h-6'></FaCarSide>
                    </div>
                    <div className="text-2xl font-semibold">Orders</div>
                    <div className="text-2xl font-semibold">{stats?.orders}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;