import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import image909 from '../../../public/image';

// Import Swiper styles
import 'swiper/css';


function Slide() {
  return (
    <div className='slider'>
          <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='img-div'>
        <img className='img' src="https://s3-alpha-sig.figma.com/img/0b70/e3ae/d771ddeb5b759c83b515de51281091ab?Expires=1703462400&Signature=pTKx7WESPtXLWxVm033WqZ-dbuvUE51j8wU0cMdFCM9xODVG~KEmpfL2YrqnLDLrwDf6NdJjkGCrXy8HgKbfIn897rZItB8gkBRJK5-2C3Q5sBCtT7XEBTh1GRcxiGUTPxlErTy~OvVVDtfWI6gx3XSOeXnFN~3rWfPzq-gubpD8wV9-pHMaZUDDzoPDY6FWa9c6WCQ~afiMUb~3wGyp3HABg3uMBpk7aiOw9I87npuswnBXdrDmW55XkHcofLOOMByyu4hHD9I8zQ-Rhcsqfeg8HTcB4ryYxQcnqkNG5GKiS5RXrhy5LEalXVMkmQufrNKdxRjqKUccV98BhLOlHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" />
        </div>
            </SwiperSlide>
      <SwiperSlide><img src='' alt="image" /></SwiperSlide>
      <SwiperSlide><img src="" alt="image" /></SwiperSlide>
      <SwiperSlide><img src="" alt="image" /></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default Slide