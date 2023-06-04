import { FaCreditCard, FaUsers, FaCarSide } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import './AdminHome.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import useAxiosSrcure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminHome = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSrcure()

    const { data: stats = {} } = useQuery({
        queryKey: ['adminStats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/adminStats')
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['chartData'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/adminOrder')
            return res.data
        }
    })

    console.log(chartData)

    // Bar Chart ----------------------------------

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

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

            <div className='flex gap-5 mt-10'>

                <div className='w-1/2'>

                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>

            </div>

        </div>
    );
};

export default AdminHome;