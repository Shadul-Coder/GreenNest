import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bg from "../assets/Footer-Bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Error from "../assets/Error 404.png";
import { useNavigate } from "react-router";

AOS.init();

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="h-[350px] flex flex-col justify-center items-center gap-5 sm:h-[400px] md:gap-7 lg:h-[500px]">
          <img
            className="h-[130px] sm:h-[150px] md:h-[170px] lg:h-[200px]"
            src={Error}
            alt=""
          />
          <button
            onClick={() => navigate(-1)}
            className="btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6"
          >
            Go Back
          </button>
        </section>
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
    </>
  );
};

export default Error404;