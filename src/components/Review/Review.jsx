import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import user1 from "../../assets/User 1.jpeg";
import user2 from "../../assets/User 2.jpg";
import user3 from "../../assets/User 3.jpg";
import user4 from "../../assets/User 4.jpg";
import user5 from "../../assets/User 5.jpg";
import user6 from "../../assets/User 6.jpg";
import user7 from "../../assets/User 7.jpg";

const Review = () => {
  const review = [
    {
      id: 1,
      name: "Sophia Bennett",
      review:
        "Absolutely love my new fiddle leaf fig! It arrived in perfect shape, and the GreenNest care guide made it so easy to keep healthy.",
      rating: 5,
      img: user1,
    },
    {
      id: 2,
      name: "Ethan Collins",
      review:
        "Great experience! The plants were fresh, well-packed, and delivered right on time. My living room looks so much livelier now.",
      rating: 4,
      img: user2,
    },
    {
      id: 3,
      name: "Mia Rodriguez",
      review:
        "I booked a consultation for my indoor garden, and the expert advice was spot on. My plants are finally thriving again!",
      rating: 5,
      img: user3,
    },
    {
      id: 4,
      name: "Liam Anderson",
      review:
        "Fantastic service and quick delivery. The succulents I ordered are healthy, vibrant, and easy to care for — highly recommend!",
      rating: 4,
      img: user4,
    },
    {
      id: 5,
      name: "Isabella Rossi",
      review:
        "Loved the variety of plants! The website is so easy to use, and my monstera looks stunning in my home office corner.",
      rating: 5,
      img: user5,
    },
    {
      id: 6,
      name: "Noah Williams",
      review:
        "The plant collection here is wonderful. My peace lily arrived fresh and green, and it instantly brightened up my bedroom.",
      rating: 5,
      img: user6,
    },
    {
      id: 7,
      name: "Emma Johansson",
      review:
        "Excellent quality and packaging. My hanging pothos looks amazing, and I appreciate the helpful care tips provided.",
      rating: 5,
      img: user7,
    },
  ];
  return (
    <section>
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          What Our <span className="text-green-600">Plant</span> Lovers Say
        </h2>
        <p className="text-center md:text-lg">
          Hear from our happy customers who brought nature closer to home with
          GreenNest.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper lg:px-7!"
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="pb-10">
              <div className="bg-gray-100 h-[309px] transition-all duration-300 rounded-3xl flex flex-col text-center group shadow-md p-6 hover:shadow-xl sm:p-7 md:p-8 sm:h-[383px] md:h-[377px] lg:h-[407px]">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-500 shadow-md">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-3 text-yellow-400 text-lg sm:text-xl">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < item.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-5 sm:text-base md:text-lg">
                  “{item.review}”
                </p>
                <div className="mt-auto">
                  <h4 className="text-green-600 font-semibold text-base sm:text-lg">
                    {item.name}
                  </h4>
                  <div className="w-16 h-1 bg-green-500 rounded-full mt-2 mx-auto transition-all duration-300 group-hover:w-25"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;