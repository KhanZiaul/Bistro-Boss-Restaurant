import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useAxiosSrcure from '../useAxiosSecure/useAxiosSecure';

const useCart = () => {
    const { user , loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSrcure()

    const { data: cart = [] , refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [cart , refetch]
};

export default useCart;


        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:7000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization : `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }