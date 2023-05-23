import Title from '../../../Components/Title/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'

const OrderOnline = () => {
    return (
        <div className='my-12'>
            <Title
                subTitle={'--- From 11:00am to 10:00pm ---'}
                Title={'ORDER ONLINE'}></Title>
            <div className='cursor-pointer'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-16 mt-8"
                >
                    <SwiperSlide>
                        <img src={image1} alt="" />
                        <h2 className='uppercase  lg:text-4xl text-center -mt-9 lg:-mt-12 text-white'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" />
                        <h2 className='uppercase lg:text-4xl text-center -mt-9 lg:-mt-12 text-white'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="" />
                        <h2 className='uppercase lg:text-4xl text-center -mt-9 lg:-mt-12 text-white'>pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="" />
                        <h2 className='uppercase lg:text-4xl text-center -mt-9 lg:-mt-12 text-white'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="" />
                        <h2 className='uppercase lg:text-4xl text-center -mt-9 lg:-mt-12 text-white'>Salads</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;