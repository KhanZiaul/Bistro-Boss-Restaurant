import { useEffect, useState } from "react"

function useMenuData() {
    const [allMenu, setAllMenu] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/menu')
            .then(res => res.json())
            .then(datas => {
                setAllMenu(datas)
            })
    }, [])

    return [allMenu];
}

export default useMenuData;