import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSrcure from "../useAxiosSecure/useAxiosSecure";

function useAdmin() {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSrcure()

    const {data: isAdmin = [] , refetch} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin response', res)
            return res.data.admin;
        }
    })

    return [isAdmin,refetch]

}
export default useAdmin;