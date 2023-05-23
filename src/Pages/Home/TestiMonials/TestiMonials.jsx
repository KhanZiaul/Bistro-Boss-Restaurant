import Title from "../../../Components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import image from '../../../assets/home/quote.png'

const TestiMonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(datas => setReviews(datas))
    }, [])

    return (
        <div className="my-12">
            <Title
                subTitle={'--- What Our Clients Say ---'}
                Title={'TESTIMONIALS'}>
            </Title>

            <div className="mt-8">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews?.map(review => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className="text-center w-[90%] mx-auto">
                                            <div className="mx-auto w-[10%] mb-3">
                                                <img className="w-12 mx-auto mb-4" src={image} alt="" />
                                                <Rating
                                                    style={{ maxWidth: 120 }}
                                                    value={review?.rating}
                                                    readOnly
                                                />
                                            </div>
                                            <p className="mb-3"> {review?.details}</p>
                                            <p className="text-3xl text-yellow-500">{review?.name}</p>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TestiMonials;