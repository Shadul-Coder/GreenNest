import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import logo from "../../assets/White Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="relative max-w-7xl w-[95%] mx-auto lg:w-[97%]">
      <div className="hidden lg:absolute lg:-top-16 lg:w-full lg:flex lg:gap-5">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="bg-linear-to-r from-green-600 to-green-500 flex-3 rounded-3xl flex justify-center items-center gap-3"
        >
          <img className="h-[90px]" src={logo} alt="" />
          <h1 className="text-2xl font-bold">GreenNest</h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="bg-[#e8f5e9] text-[#0f4229] min-h-[130px] px-13 rounded-3xl flex-7 flex justify-between gap-5"
        >
          <div className="flex gap-3 items-center text-green-600 text-lg font-semibold">
            <FaLocationDot className="text-xl" />
            <h5>Mirpur, Dhaka</h5>
          </div>
          <div className="flex gap-3 items-center text-green-600 text-lg font-semibold">
            <IoIosCall className="text-2xl" />
            <h5>01711933011</h5>
          </div>
          <div className="flex gap-3 items-center text-green-600 text-lg font-semibold">
            <IoMdMail className="text-2xl" />
            <h5>greennest@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 py-16 border-b border-gray-300 sm:grid-cols-2 lg:grid-cols-4 lg:pt-32">
        <div>
          <h5 className="text-xl font-semibold mb-4">About Us</h5>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            GreenNest helps you bring nature indoors with healthy plants, expert
            care guides, and consultation services — making every space greener
            and happier.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Explore</h5>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="cursor-pointer hover:underline">
              <Link to={"/plants"}>Shop Plants</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/#careTips">Care Guides</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/#experts">Expert Consultations</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/#ecoDecor">Decor Ideas</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to={"/about-us"}>About GreenNest</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Customer Support</h5>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="cursor-pointer hover:underline">
              <Link to={"/contact"}>Shipping & Delivery</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/#faq">FAQs</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to={"/contact"}>Return Policy</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Newsletter</h5>
          <p className="text-sm text-gray-300 mb-6">
            Subscribe for plant care tips, seasonal offers, and updates from
            GreenNest.
          </p>
          <div className="flex border p-1 rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-sm outline-none placeholder-gray-300"
            />
            <button className="bg-white p-3 text-[#0f4229] text-xl rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-all">
              <IoMdMail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
