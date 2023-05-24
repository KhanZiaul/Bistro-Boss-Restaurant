import { useEffect, useState } from "react"

function useMenuData() {
    const [allMenu, setAllMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(datas => {
                setAllMenu(datas)

            })
    }, [])

    return [allMenu];
}

export default useMenuData;