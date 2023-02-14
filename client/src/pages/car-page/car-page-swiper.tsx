import Img from 'components/layout/ui/img';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

type CarPageSwiperProps = Pick<CarModel, 'images'>;

const CarPageSwiper: React.FC<CarPageSwiperProps> = ({
  images,
}) => {
  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
    >
      {
      images.map((img) => (
        <SwiperSlide key={img}>
          <Img src={img} />
        </SwiperSlide>
      ))
    }
    </Swiper>
  );
};

export default CarPageSwiper;
