import Title from '../../../Components/Title/Title';
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'

const ChefRecommends = () => {
    return (
        <div className='my-12'>

            <Title
                subTitle={'--- Should Try ---'}
                Title={'CHEF RECOMMENDS'}></Title>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salads</h2>
                        <p className='text-justify'>Fresh, crisp, vibrant, nutritious, colorful, wholesome, light, satisfying, delicious, tasty, seasonal, organic, zesty, tangy, crunchy, mouthwatering, invigorating, balanced, farm-to-table, customizable.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-2">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soups</h2>
                        <p className='text-justify'>Soups are a comforting and versatile dish, typically made by combining various ingredients such as vegetables, meat, or legumes in a flavorful broth. They can be enjoyed as a starter, a main course, or even as a light meal on their own.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-2">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizzas</h2>
                        <p className='text-justify'>
                            Pizzas are a beloved and versatile dish that originated in Italy but have gained popularity worldwide. They consist of a round, flat bread base topped with a variety of ingredients, including sauce, cheese, vegetables, meats, and herbs. Pizzas are typically baked in an oven until the crust is crispy and the cheese is melted.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-2">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;