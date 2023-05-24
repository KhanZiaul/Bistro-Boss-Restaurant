import Title from "../../../Components/Title/Title";
import { useEffect, useState } from "react";
import './OurMenu.css'

const OurMenu = () => {

    const [menus, setMenus] = useState([])
    const [showMore, setShowMore] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(datas => {
                const populars = datas?.filter(popular => popular.category === 'popular')
                setMenus(populars)

            })
    }, [])
 
    function showMoreHandler() {
        setShowMore(!showMore)
    }

    return (
        <div className='my-12'>
            <Title
                subTitle={'--- Check it out ---'}
                Title={'FROM OUR MENU'}>
            </Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 space-y-6 mx-4 lg:mx-0">
                {
                    menus?.slice(0,showMore ? 6 : menus?.length).map(menu => {
                        return (
                            <>
                                <div className="flex justify-between items-center flex-col lg:flex-row gap-10">
                                    <div>
                                        <img className="w-[118px] h-[104px] border" src={menu?.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl uppercase">{menu?.name}.................</h2>
                                        <small>{menu?.recipe}</small>
                                    </div>

                                    <div>
                                        <p className="text-xl text-yellow-500">${menu?.price}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <button onClick={showMoreHandler} className="btn btn-outline bottom-0 border-b-4 block mx-auto">{showMore ? 'View Full Menu' : 'View Less Menu'}</button>
        </div>
    );
};

export default OurMenu;