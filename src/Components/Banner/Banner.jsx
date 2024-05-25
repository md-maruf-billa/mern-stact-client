import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useQuery } from '@tanstack/react-query';

const Banner = () => {
    const { data, isPending } = useQuery({
        queryKey: ["Banner Image"],
        queryFn: async () => {
            const res = await axios.get("./banner.json");
            return res.data
        }
    })
    if (isPending) {
        return
    }
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={true}
                className="mySwiper">
                {
                    data.map(img =>
                        <SwiperSlide
                            className='min-h-[700px] bg-cover'
                            style={{ backgroundImage: `url(${img.image})` }}
                        >

                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default Banner;