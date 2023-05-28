import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";


const Order = ({ title, subTitle, image , items }) => {

    return (
        <div className='my-12'>
            {
                title && <Cover image={image} title={title} subTitle={subTitle}></Cover>
            }
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 space-y-6 mx-4 lg:mx-0">
                {
                    items?.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between items-center flex-col lg:flex-row gap-10">
                                <div>
                                    <img className="w-[118px] h-[104px] border" src={item?.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl uppercase">{item?.name}.................</h2>
                                    <small>{item?.recipe}</small>
                                </div>

                                <div>
                                    <p className="text-xl text-yellow-500">${item?.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline bottom-0 border-b-4 block mx-auto">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default Order;