import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bg from "../assets/Footer-Bg.png";

const Root = () => {
  return (
    <>
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
    </>
  );
};

export default Root;