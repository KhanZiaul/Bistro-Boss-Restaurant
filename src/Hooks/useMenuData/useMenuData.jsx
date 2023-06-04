import { useQuery } from "@tanstack/react-query"

function useMenuData() {
    const {data :allMenu = [] , refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async() => {
            const res = await fetch('https://bistro-boss-server-khanziaul.vercel.app/menu')
            return res.json()
        }
    })

    return [allMenu , refetch];
}

export default useMenuData;