// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="rounded-lg">
        <div
          className="w-full bg-center bg-cover h-[38rem] max-w-7xl mx-auto "
          style={{
            backgroundImage: `url("https://i.ibb.co/nLSYQPF/books-books-background-483949-4333.jpg")`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Shelf Master: Your Space, Elevated.
              </h1>
              <br />
              {/* <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                Post Job & Hire Expert
              </button> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg">
        <div
          className="w-full bg-center bg-cover h-[38rem] max-w-7xl mx-auto rounded-xl"
          style={{
            backgroundImage: `url("https://i.ibb.co/4T4hG7j/hard-cover-book-mockup-scene-358694-4809.jpg")`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Shelf Master: Elevating Organization, Simplifying Life
              </h1>
              <br />
              {/* <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                Post Job & Hire Expert
              </button> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg">
        <div
          className="w-full bg-center bg-cover h-[38rem] max-w-7xl mx-auto rounded-xl"
          style={{
            backgroundImage: `url("https://i.ibb.co/tPjj9jc/content-black-man-posing-with-book-23-2147664958.jpg")`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Simplify Life, Elevate Spaces: Shelf Master Solutions
              </h1>
              <br />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
