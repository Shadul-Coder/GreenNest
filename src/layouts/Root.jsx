import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bg from "../assets/Footer-Bg.png";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../utility/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-[#0f4229] text-white bg-cover bg-center lg:mt-16"
      >
        <Footer />
        <small className="block py-7 text-center">
          © 2025 GreenNest. All rights reserved.
        </small>
      </footer>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Root;