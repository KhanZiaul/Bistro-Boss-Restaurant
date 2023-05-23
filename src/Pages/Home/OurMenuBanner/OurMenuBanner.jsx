import './OurMenuBanner.css'
import image1 from '../../../assets/home/featured.jpg'

const OurMenuBanner = () => {
    return (
        <div className="bg-image-Two bg-fixed my-12">
            <div className='pt-4 lg:pt-12 relative z-30'>
                <div className='text-center text-white space-y-5 w-96 mx-auto'>
                    <p className="text-yellow-500">--- Check it out ---</p>
                    <h2 className='border-t-2 border-white border-b-2 p-5 text-xl lg:text-4xl'>FROM OUR MENU</h2>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-9 gap-8'>
                <div>
                    <img className='relative z-30 w-[500px] rounded-md h-[200px] lg:h-[300px] ' src={image1} alt="" />
                </div>
                <div className='w-full lg:w-[50%] space-y-5 text-white z-30'>
                    <p className='text-xl lg:text-3xl'>March 20, 2023</p>
                    <p className='text-xl lg:text-2xl'>WHERE CAN I GET SOME?</p>
                    <p className='lg:text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className="btn btn-outline bottom-0 border-b-4 block text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default OurMenuBanner;