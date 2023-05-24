import Title from "../../../Components/Title/Title";
import { useState } from "react";
import './Popular.css'
import useMenuData from "../../../Hooks/useMenuData/useMenuData";

const Popular = () => {
    const [showMore, setShowMore] = useState(true)
    const [allMenu] = useMenuData()
    const populars = allMenu?.filter(popular => popular.category === 'popular')
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
                    populars?.slice(0, showMore ? 6 : populars?.length).map((menu,index) => {
                        return (
                                <div key={index} className="flex justify-between items-center flex-col lg:flex-row gap-10">
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
                        )
                    })
                }
            </div>
            <button onClick={showMoreHandler} className="btn btn-outline bottom-0 border-b-4 block mx-auto">{showMore ? 'View Full Menu' : 'View Less Menu'}</button>
        </div>
    );
};

export default Popular;