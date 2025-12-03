import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg1 from "../../assets/Slide 1.jpg";
import bg2 from "../../assets/Slide 2.jpg";
import bg3 from "../../assets/Slide 3.jpg";
import bg4 from "../../assets/Slide 4.jpg";
import bg5 from "../../assets/Slide 5.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-yellow-300 h-[330px] mt-7 lg:mt-5 rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px]">
            <div
              style={{
                backgroundImage: `url(${bg1})`,
              }}
              className="h-full bg-center bg-cover relative"
            >
              <div className="z-0 absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full p-13 flex flex-col justify-center items-center gap-3 sm:p-15 md:p-20 md:gap-5 lg:gap-7">
                <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Bring Nature Home
                </h1>
                <p className="text-center text-gray-300 md:text-lg lg:w-[60%]">
                  Discover lush indoor plants that purify your air and uplift
                  your mood — naturally.
                </p>
                <Link
                  to={"/plants"}
                  className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl"
                >
                  Explore Plants
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 h-[330px] mt-7 lg:mt-5 rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px]">
            <div
              style={{
                backgroundImage: `url(${bg2})`,
              }}
              className="h-full bg-center bg-cover relative"
            >
              <div className="z-0 absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full p-13 flex flex-col justify-center items-center gap-3 sm:p-15 md:p-20 md:gap-5 lg:gap-7">
                <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Grow, Nurture, Flourish
                </h1>
                <p className="text-center text-gray-300 md:text-lg lg:w-[50%]">
                  From low-maintenance succulents to tropical ferns — find your
                  perfect green companion.
                </p>
                <Link
                  to={"/plants"}
                  className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 h-[330px] mt-7 lg:mt-5 rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px]">
            <div
              style={{
                backgroundImage: `url(${bg3})`,
              }}
              className="h-full bg-center bg-cover relative"
            >
              <div className="z-0 absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full p-13 flex flex-col justify-center items-center gap-3 sm:p-15 md:p-20 md:gap-5 lg:gap-7">
                <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Care Made Simple
                </h1>
                <p className="text-center text-gray-300 md:text-lg lg:w-[60%]">
                  Learn easy plant care routines and keep your indoor jungle
                  thriving all year round.
                </p>
                <a
                  href="#careTips"
                  className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl"
                >
                  Read Care Tips
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 h-[330px] mt-7 lg:mt-5 rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px]">
            <div
              style={{
                backgroundImage: `url(${bg4})`,
              }}
              className="h-full bg-center bg-cover relative"
            >
              <div className="z-0 absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full p-13 flex flex-col justify-center items-center gap-3 sm:p-15 md:p-20 md:gap-5 lg:gap-7">
                <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Expert Guidance, Anytime
                </h1>
                <p className="text-center text-gray-300 md:text-lg lg:w-[60%]">
                  Book a consultation with our green experts and get
                  personalized advice for your plants.
                </p>
                <Link
                  to={"/contact"}
                  className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 h-[330px] mt-7 lg:mt-5 rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px]">
            <div
              style={{
                backgroundImage: `url(${bg5})`,
              }}
              className="h-full bg-center bg-cover relative"
            >
              <div className="z-0 absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full p-13 flex flex-col justify-center items-center gap-3 sm:p-15 md:p-20 md:gap-5 lg:gap-7">
                <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Style Your Space Naturally
                </h1>
                <p className="text-center text-gray-300 md:text-lg lg:w-[60%]">
                  Create a refreshing, eco-friendly home with plants that bring
                  life and calm to every corner.
                </p>
                <a
                  href="#ecoDecor"
                  className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl"
                >
                  Get Inspired
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
