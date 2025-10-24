import { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, signinEmailPass, signGoogle } = use(AuthContext);
  const location = useLocation();
  if (user) {
    navigate(location.state || "/");
  }
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    signinEmailPass(email, password)
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signGoogle()
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-7xl w-[95%] my-9 mx-auto space-y-7 sm:my-13 lg:mb-29 lg:w-[97%] lg:flex lg:items-center lg:gap-7">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-center space-y-3 lg:text-start lg:ml-11"
      >
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Welcome Back to
          <br />
          <span className="text-green-600">GreenNest</span>
        </h1>
        <p className="sm:text-lg sm:w-[70%] sm:mx-auto lg:mx-0 lg:w-[77%]">
          Let’s continue your journey to a greener home — sign in to explore,
          care, and grow together.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-[#e7f6e9] w-[93%] mx-auto px-9 py-7 rounded-3xl sm:max-w-[430px] lg:mr-11"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <h3 className="text-xl text-center mb-3 font-bold text-green-600">
            Login
          </h3>
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
          <div className="flex flex-col gap-1">
            <label className="text-[13px]" htmlFor="password">
              Password :
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="bg-white px-3.5 py-1.5 rounded-xl placeholder-gray-300 focus:outline-none w-full"
              />
              <button
                className="absolute top-2.5 right-3"
                onClick={handleShowPass}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <Link to={"/forgot-password"} className="text-green-600 text-[13px]">
            Forget Password?
          </Link>
          <p className="text-[13px] text-black">
            New to our website? Please{" "}
            <Link className="text-green-600 underline" to={"/register"}>
              Register
            </Link>
          </p>
          <input
            type="submit"
            value="Log In"
            className="bg-linear-to-r from-green-500 to-green-600 text-white btn mt-3 rounded-xl"
          />
        </form>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px bg-gray-300 flex-1"></div>
          <div>OR</div>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="btn mt-3 w-full rounded-xl"
        >
          <FcGoogle /> Continue With Google
        </button>
        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;