import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data, renderCard }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
