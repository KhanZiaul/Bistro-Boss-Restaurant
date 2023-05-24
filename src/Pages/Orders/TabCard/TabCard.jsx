import { Link } from "react-router-dom";


const TabCard = ({item}) => {

    const {image , name , recipe} = item

    return (
            <div className="card w-full lg:h-[96] lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="item" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <Link><button className="btn btn-outline bottom-0 border-b-4 block mx-auto">ADD TO CART</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default TabCard;