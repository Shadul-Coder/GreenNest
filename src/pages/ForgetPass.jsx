import { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const ForgetPass = () => {
  const navigate = useNavigate();
  const { user, passwordReset } = use(AuthContext);
  if (user) {
    navigate("/");
  }
  const [error, setError] = useState("");
  const handleForgetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    passwordReset(email)
      .then(() => {
        navigate("/login");
        toast.success("Email sent! Check your inbox.");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-7xl w-[95%] my-9 mx-auto sm:my-13 lg:mb-29 lg:w-[97%]">
      <div className="bg-[#e7f6e9] w-[93%] mx-auto px-9 py-7 rounded-3xl sm:max-w-[430px]">
        <form onSubmit={handleForgetPass} className="flex flex-col gap-1.5">
          <h3 className="text-xl text-center mb-3 font-bold text-[#348e38]">
            Forget Password
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
          <input
            type="submit"
            value="Get Mail"
            className="bg-linear-to-r from-[#4db42d] to-[#348e38] text-white btn mt-3 rounded-xl"
          />
        </form>
        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ForgetPass;