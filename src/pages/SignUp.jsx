import { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser, createEmailPass, update } = use(AuthContext);
  if (user) {
    navigate("/");
  }
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const urlPattern = /^https:\/\/([\w\-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!namePattern.test(name)) {
      setError("Please enter a valid name.");
      return;
    }
    if (!urlPattern.test(photo)) {
      setError("Please enter a valid photo URL starting with https://");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    if (!e.target.terms.checked) {
      setError("You must accept the terms and conditions.");
      return;
    }
    createEmailPass(email, password)
      .then((res) => {
        const current = res.user;
        update(current, name, photo)
          .then(() => {
            setUser({ ...current });
          })
          .catch((error) => {
            setError(error.message);
          });
        navigate("/");
        toast.success("Registration successful!");
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
          Join the <span className="text-green-600">GreenNest</span>
          <br />
          Community
        </h1>
        <p className="sm:text-lg sm:w-[70%] sm:mx-auto lg:mx-0 lg:w-[77%]">
          Create your account and start discovering indoor plants, personalized
          care guides, and expert tips for a healthier home.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-[#e7f6e9] w-[93%] mx-auto px-9 py-7 rounded-3xl sm:max-w-[430px] lg:mr-11"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <h3 className="text-xl text-center mb-3 font-bold text-green-600">
            Register
          </h3>
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
            <label className="text-[13px]" htmlFor="url">
              Photo :
            </label>
            <input
              type="url"
              name="photo"
              id="url"
              placeholder="Enter Your Photo URL"
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
          <p className="text-[13px] text-black">
            Already have an account? Please{" "}
            <Link className="text-green-600 underline" to={"/login"}>
              LogIn
            </Link>
          </p>
          <div className="flex gap-3">
            <input type="checkbox" name="terms" className="checkbox" />
            <p>Accept our terms & conditions</p>
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-linear-to-r from-green-500 to-green-600 text-white btn mt-3 rounded-xl"
          />
        </form>
        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;