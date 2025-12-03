import {
  FaLeaf,
  FaHandsHelping,
  FaTruck,
  FaHeadset,
  FaSeedling,
  FaHeart,
} from "react-icons/fa";
import { GiWateringCan } from "react-icons/gi";
import { MdEco } from "react-icons/md";
import { TbPlant2 } from "react-icons/tb";

const AboutUs = () => {
  const values = [
    {
      icon: <MdEco />,
      title: "Sustainability First",
      description:
        "We source plants from eco-friendly nurseries and use biodegradable packaging",
    },
    {
      icon: <FaHandsHelping />,
      title: "Expert Guidance",
      description:
        "Free plant consultations and care guides for every purchase",
    },
    {
      icon: <FaTruck />,
      title: "Safe Delivery",
      description: "Specialized plant packaging for stress-free transportation",
    },
    {
      icon: <GiWateringCan />,
      title: "Aftercare Support",
      description: "Lifetime plant care advice for our green family members",
    },
  ];
  const stats = [
    { number: "10,000+", label: "Happy Plant Parents", icon: <FaHeart /> },
    { number: "500+", label: "Plant Varieties", icon: <TbPlant2 /> },
    { number: "15+", label: "Local Nurseries", icon: <FaSeedling /> },
    { number: "24/7", label: "Plant Support", icon: <FaHeadset /> },
  ];
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-9 sm:my-13 lg:w-[97%] lg:mb-29">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-9 md:text-5xl lg:mb-11">
        Our <span className="text-green-600">Green</span> Story
      </h1>
      <p className="mb-7 md:mb-9 xl:mb-11 md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
        Bringing nature indoors, one plant at a time. We're passionate about
        connecting people with plants that purify, beautify, and energize their
        spaces.
      </p>
      <div className="grid grid-cols-1 gap-5 mb-10 sm:mb-11 md:mb-13 lg:mb-15 lg:grid-cols-2 lg:gap-7">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="bg-[#e7f6e9] p-8 rounded-3xl shadow-lg"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <FaLeaf className="sm:text-lg md:text-xl lg:text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-green-800">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed md:text-lg">
            To make indoor gardening accessible, enjoyable, and sustainable for
            everyone. We believe that every home deserves the life and beauty
            that plants bring, and we're committed to providing healthy,
            well-cared-for plants along with the knowledge to help them thrive.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="bg-linear-to-r from-green-600 to-green-500 p-8 rounded-3xl shadow-lg text-white"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-white text-green-600 p-3 rounded-full">
              <TbPlant2 className="sm:text-lg md:text-xl lg:text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="leading-relaxed md:text-lg">
            We envision cities filled with green spaces—starting from inside
            each home. By 2030, we aim to help over 100,000 households create
            their own indoor green havens, contributing to cleaner air and
            happier lives through the power of plants.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-10 sm:mb-11 md:mb-13 lg:mb-15 sm:grid-cols-4 lg:gap-7">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="text-center bg-white p-6 rounded-3xl shadow-md border border-green-100"
          >
            <div className="text-green-600 text-3xl mb-3 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-green-700 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-10 sm:mb-11 md:mb-13 lg:mb-15">
        <h2 className="text-center mb-7 md:mb-9 lg:mb-11 text-xl font-bold sm:text-2xl lg:text-3xl">
          Our <span className="text-green-600">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-3xl shadow border border-green-100"
            >
              <div className="bg-[#e7f6e9] text-green-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#e7f6e9] rounded-3xl p-8 lg:p-12">
        <h2 className="text-center mb-7 text-green-800 md:mb-9 lg:mb-11 text-xl font-bold sm:text-2xl lg:text-3xl">
          How It All Began
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
              GreenNest started in 2020 when our founder, Sarah, noticed how
              disconnected city dwellers had become from nature. What began as a
              small balcony nursery quickly grew into a community of plant
              enthusiasts.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
              Today, we're a team of plant lovers, horticulturists, and
              sustainability advocates working together to make indoor gardening
              easy and rewarding. Every plant we deliver is carefully selected
              and nurtured with love.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              We're not just selling plants—we're growing a greener, healthier
              community, one leaf at a time.
            </p>
          </div>
          <div className="relative">
            <div className="h-70 rounded-2xl sm:h-90 md:h-110 lg:h-90 overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/024/770/435/small/happy-small-business-owner-at-a-plant-shop-photo.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="text-green-600 text-3xl mb-3">
                <FaLeaf />
              </div>
              <p className="text-gray-700 font-semibold">
                "Plants don't just decorate space—they transform lives."
              </p>
              <p className="text-gray-500 text-sm mt-2">
                — Sarah Green, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
