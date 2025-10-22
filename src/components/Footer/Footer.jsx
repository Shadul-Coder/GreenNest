import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import logo from "../../assets/White Logo.png";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative max-w-7xl w-[95%] mx-auto lg:w-[97%]">
      <div className="hidden lg:absolute lg:-top-16 lg:w-full lg:flex lg:gap-5">
        <div className="bg-[#348e38] flex-2 rounded-3xl flex justify-center items-center gap-3">
          <img className="h-[90px]" src={logo} alt="" />
          <h1 className="text-2xl font-bold">GreenNest</h1>
        </div>
        <div className="bg-[#e8f5e9] text-[#0f4229] min-h-[130px] px-9 rounded-3xl flex-3 flex justify-between gap-5">
          <div className="flex gap-3 items-center text-[#348e38] font-semibold">
            <FaLocationDot className="text-xl" />
            <h5>Mirpur, Dhaka</h5>
          </div>
          <div className="flex gap-3 items-center text-[#348e38] font-semibold">
            <IoIosCall className="text-2xl" />
            <h5>01990199709</h5>
          </div>
          <div className="flex gap-3 items-center text-[#348e38] font-semibold">
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
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-[#348e38] hover:text-white transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-[#348e38] hover:text-white transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-[#348e38] hover:text-white transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white text-[#0f4229] p-1.5 rounded-full hover:bg-[#348e38] hover:text-white transition-all"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Explore</h5>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="cursor-pointer hover:underline">Shop Plants</li>
            <li className="cursor-pointer hover:underline">Care Guides</li>
            <li className="cursor-pointer hover:underline">
              Expert Consultations
            </li>
            <li className="cursor-pointer hover:underline">Decor Ideas</li>
            <li className="cursor-pointer hover:underline">About GreenNest</li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Customer Support</h5>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="cursor-pointer hover:underline">
              Shipping & Delivery
            </li>
            <li className="cursor-pointer hover:underline">FAQs</li>
            <li className="cursor-pointer hover:underline">Return Policy</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
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
            <button className="bg-white p-3 text-[#0f4229] text-xl rounded-full cursor-pointer hover:bg-[#348e38] hover:text-white transition-all">
              <IoMdMail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;