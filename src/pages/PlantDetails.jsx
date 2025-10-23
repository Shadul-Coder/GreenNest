import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading/Loading";
import bg from "../assets/Consultation-Form-Bg.png";
import {
  FaStar,
  FaLeaf,
  FaSeedling,
  FaUser,
  FaShoppingCart,
  FaCalendarAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

const PlantDetails = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("/plants.json");
      const current = res.data.find((p) => p.plantId === plantId);
      setPlant(current);
    };
    fetchData();
  }, [plantId]);
  if (!plant) return <Loading />;
  const {
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    image,
    providerName,
  } = plant;
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!namePattern.test(name)) {
      setError("Please enter a valid name.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    e.target.reset();
    setError("");
    toast.success("Your booking is confirmed!");
  };
  return (
    <>
      <div className="max-w-7xl mx-auto w-[95%] relative my-9 sm:my-13 lg:w-[97%]">
        <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-9 md:text-5xl lg:mb-11">
          <span className="text-green-600">Plant</span> Details
        </h1>
        <div className="my-3 breadcrumbs text-sm sm:text-base md:text-lg">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Plants</a>
            </li>
            <li>{plantName}</li>
          </ul>
        </div>
        <div className="bg-linear-to-br from-green-50/80 via-white/70 to-green-100/80 rounded-3xl shadow-xl p-5 space-y-5 sm:space-y-7 sm:p-7 md:space-y-10 md:p-10 lg:space-y-0 lg:flex lg:items-center lg:gap-10">
          <div className="relative overflow-hidden rounded-2xl group shadow-lg lg:rounded-3xl lg:flex-1">
            <img
              src={image}
              alt={plantName}
              className="w-full transition-all duration-700 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 bg-linear-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-lg">
              {category}
            </span>
          </div>
          <div className="space-y-3 sm:space-y-5 md:space-y-7 lg:flex-1">
            <div>
              <h1 className="text-3xl font-bold text-green-600 sm:text-4xl">
                {plantName}
              </h1>
              <p className="text-gray-600 mt-3 text-sm flex items-center gap-2 md:text-base">
                <FaUser className="text-green-700" /> Provided by{" "}
                <span className="text-green-700 font-medium">
                  {providerName}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm md:text-base">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-700">{rating}</span>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <FaLeaf className="text-green-600" /> Stock :
                <span className="font-semibold">{availableStock}</span>
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                <FaSeedling className="text-green-600" /> Care :
                <span className="font-semibold capitalize">{careLevel}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify md:text-lg">
              {description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-green-600 sm:text-3xl">
                  ${price.toFixed(2)}
                </h2>
                <p className="text-sm text-gray-500 mt-1">Tax included</p>
              </div>
              <div className="sm:flex items-center gap-3">
                <button className="flex items-center btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-2xl transition-all hover:scale-101 md:text-lg md:p-6">
                  <FaShoppingCart /> Add to Cart
                </button>
                <a
                  href="#consultation"
                  className="hidden sm:flex items-center btn rounded-2xl text-green-600 border border-green-600 bg-white transition-all hover:scale-101 md:text-lg md:p-6 lg:hidden xl:flex"
                >
                  <FaCalendarAlt /> Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#348e38] lg:mb-29">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="bg-cover"
        >
          <div className="max-w-7xl w-[95%] mx-auto py-13 space-y-5 sm:py-15 sm:space-y-7 md:py-17 md:space-y-9 lg:py-23 lg:w-[97%] lg:flex lg:justify-evenly lg:items-center">
            <div className="space-y-1.5 md:space-y-3">
              <h1 className="text-center text-white text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl lg:text-start">
                Book a Plant Care
                <br />
                Consultation
              </h1>
              <p className="text-center text-white md:text-lg lg:text-start">
                Get expert advice to keep your plant thriving.
              </p>
            </div>
            <div className="bg-[#e7f6e9] w-[93%] mx-auto px-9 py-7 rounded-3xl sm:max-w-[430px] lg:mx-0">
              <h3 className="text-xl text-center mb-3 font-bold text-green-600">
                Your Details
              </h3>
              <form
                onSubmit={handleSubmit}
                id="consultation"
                className="flex flex-col gap-1.5 scroll-mt-50"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-[13px]" htmlFor="name">
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className="bg-white px-3.5 py-1.5 rounded-xl placeholder-gray-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[13px]" htmlFor="email">
                    Email :
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-white px-3.5 py-1.5 rounded-xl placeholder-gray-300 focus:outline-none"
                  />
                </div>
                <input
                  type="submit"
                  value="Book Now"
                  className="bg-linear-to-r from-green-500 to-green-600 text-white btn mt-3 rounded-xl"
                />
              </form>
              {error && (
                <p className="text-red-500 mt-3 text-center">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantDetails;