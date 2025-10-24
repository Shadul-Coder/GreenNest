import { Link } from "react-router";
import PlantBox from "../components/Plants/PlantBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg1 from "../assets/Slide 1.jpg";
import bg2 from "../assets/Slide 2.jpg";
import bg3 from "../assets/Slide 3.jpg";
import bg4 from "../assets/Slide 4.jpg";
import bg5 from "../assets/Slide 5.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import watering from "../assets/Watering.jpg";
import sunlight from "../assets/Sunlight.jpeg";
import fertilizing from "../assets/Fertilizing.jpg";

const Home = () => {
  const [topPlants, setTopPlants] = useState([]);
  useEffect(() => {
    const topNo = ["VB781", "GS947", "LV869", "CP889", "SB971"];
    const getData = async () => {
      const res = await axios("/plants.json");
      const selectedPlants = res.data.filter((plant) =>
        topNo.includes(plant.plantId)
      );
      setTopPlants(selectedPlants);
    };
    getData();
  }, []);
  return (
    <div className="max-w-7xl w-[95%] mx-auto lg:w-[97%]">
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
            <div className="bg-yellow-300 h-[330px] rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px]">
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
                  <button className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl">
                    Explore Plants
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-300 h-[330px] rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px]">
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
                    From low-maintenance succulents to tropical ferns — find
                    your perfect green companion.
                  </p>
                  <button className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-300 h-[330px] rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px]">
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
                  <button className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl">
                    Read Care Tips
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-300 h-[330px] rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px]">
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
                  <button className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-300 h-[330px] rounded-3xl overflow-hidden sm:h-[400px] md:h-[470px] lg:h-[550px]">
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
                    Create a refreshing, eco-friendly home with plants that
                    bring life and calm to every corner.
                  </p>
                  <button className="mt-2 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6 md:rounded-2xl">
                    Get Inspired
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
          <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
            Top Rated Indoor <span className="text-green-600">Plants</span>
          </h2>
          <p className="text-center md:text-lg">
            Loved by plant parents — our best-selling and easy-to-care-for
            greens.
          </p>
        </div>
        {topPlants.length === 0 ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {topPlants.map((plant) => (
                <PlantBox key={plant.plantId} plant={plant} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to={"/plants"}
                className="mt-5 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:mt-7"
              >
                Explore More
              </Link>
            </div>
          </>
        )}
      </section>
      <section>
        <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
          <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
            <span className="text-green-600">Plants</span> Care Made Easy
          </h2>
          <p className="text-center md:text-lg">
            Simple guides to help your greens thrive every season.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700 md:row-span-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${watering})` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white backdrop-blur-[2px]">
              <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">
                  Watering Tips
                </h2>
                <p className="text-base opacity-90 font-medium">
                  💧 Tip : Always ensure your pots have proper drainage holes.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-xl font-semibold leading-relaxed">
                  Water your plants only when the top inch of soil feels dry.
                  Keep soil moist, not soggy — your roots will thank you.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${sunlight})` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">
                  Sunlight Tips
                </h2>
                <p className="text-base opacity-90 font-medium">
                  ☀️ Tip : Rotate your plants weekly for even light exposure.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100">
                <p className="text-xl font-semibold leading-relaxed">
                  Most indoor plants love bright, indirect sunlight. Avoid harsh
                  rays, especially during midday.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${fertilizing})` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">
                  Fertilizing Tips
                </h2>
                <p className="text-base opacity-90 font-medium">
                  🌿 Tip : Water before applying fertilizer to avoid root burn.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100">
                <p className="text-xl font-semibold leading-relaxed">
                  Feed plants every 4–6 weeks during growing seasons. Skip
                  feeding during winter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;