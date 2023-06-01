import { useQuery } from "@tanstack/react-query"

function useMenuData() {
    const {data :allMenu = [] , refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:7000/menu')
            return res.json()
        }
    })

    return [allMenu , refetch];
}

export default useMenuData;