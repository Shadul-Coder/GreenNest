import { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import { CgMenuRightAlt, CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { GiTreeBranch } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { cart, user, signOutuser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutuser().then().catch();
  };
  return (
    <>
      <nav className="max-w-7xl mx-auto py-3.5 w-[95%] flex justify-between items-center lg:w-[97%]">
        <div className="flex items-center gap-3">
          <img className="h-[50px] sm:h-[55px]" src="/Logo.png" alt="" />
          <h1 className="text-xl text-green-600 font-bold sm:text-2xl">
            GreenNest
          </h1>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="hidden lg:bg-linear-to-r lg:from-green-500 lg:to-green-600 lg:px-1.5 lg:py-1.5 lg:rounded-full lg:flex lg:gap-1.5 lg:text-white lg:font-semibold"
        >
          <NavLink
            to={"/"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/plants"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-green-600"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to={"/profile"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-green-600"
            }
          >
            My Profile
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <MdOutlineShoppingCart
                    onClick={() => navigate("/cart")}
                    className="text-[30px] text-green-600 cursor-pointer"
                  />
                  <div
                    className={`${
                      cart.length === 0 ? "hidden" : "inline-grid"
                    } absolute -top-1 -right-1 *:[grid-area:1/1]`}
                  >
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    {user.photoURL ? (
                      <div className="h-[50px] w-[50px] border border-green-500 rounded-full cursor-pointer overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={user.photoURL}
                          alt=""
                        />
                      </div>
                    ) : (
                      <FaCircleUser className="text-[50px] text-green-600 cursor-pointer" />
                    )}
                  </div>
                  <div
                    tabIndex="-1"
                    className="dropdown-content bg-white border border-gray-100 mt-1.5 rounded-xl z-30 w-77 shadow-lg"
                  >
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                      <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {user.displayName}
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="p-2 text-sm text-gray-700">
                      <button
                        onClick={handleSignOut}
                        className="btn btn-ghost w-full rounded-lg flex items-center gap-2 text-red-500"
                      >
                        <FiLogOut /> Log out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn p-5.5 bg-[#e7f6e9] text-green-600 border-green-600 round1"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn p-5.5 bg-green-600 text-white round2"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-5 lg:hidden">
          {user && (
            <div className="relative">
              <MdOutlineShoppingCart
                onClick={() => navigate("/cart")}
                className="text-[23px] text-green-600 cursor-pointer sm:text-[25px]"
              />
              <div
                className={`${
                  cart.length === 0 ? "hidden" : "inline-grid"
                } absolute -top-1 -right-1 *:[grid-area:1/1]`}
              >
                <div className="status status-success animate-ping"></div>
                <div className="status status-success"></div>
              </div>
            </div>
          )}
          <label
            htmlFor="my-drawer"
            className="text-[27px] sm:text-[30px] lg:hidden"
          >
            <CgMenuRightAlt />
          </label>
        </div>
      </nav>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#e7f6e9] min-h-full w-55 p-4 sm:w-75">
            {user && (
              <div className="mx-auto py-5 space-y-3">
                <div className="mx-auto h-[70px] w-[70px] rounded-full overflow-hidden">
                  {user.photoURL ? (
                    <img
                      className="h-full w-full object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaCircleUser className="text-[70px] text-green-600" />
                  )}
                </div>
                <h3 className="font-semibold">{user.displayName}</h3>
              </div>
            )}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link
                to={"/"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-green-600 active:text-white"
              >
                <IoHome /> Home
              </Link>
              <Link
                to={"/plants"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-green-600 active:text-white"
              >
                <GiTreeBranch /> Plants
              </Link>
              <Link
                to={"/profile"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-green-600 active:text-white"
              >
                <CgProfile /> My Profile
              </Link>
            </div>
            <div className="absolute bottom-4 flex flex-col gap-1.5 sm:gap-2">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn w-[188px] bg-green-600 text-white rounded-full sm:w-[268px]"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn p-5.5 w-[188px] bg-[#e7f6e9] text-green-600 border-green-600 rounded-full sm:w-[268px]"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn p-5.5 w-[188px] bg-green-600 text-white rounded-full sm:w-[268px]"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;