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
                subTitle={'---From 11:00am to 10:00pm---'}
                Title={'ORDER ONLINE'}></Title>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-16"
                >
                    <SwiperSlide>
                        <img src={image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default OrderOnline;