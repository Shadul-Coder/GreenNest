import { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import { CgMenuRightAlt, CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { GiTreeBranch } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, signOutuser } = use(AuthContext);
  const handleSignOut = () => {
    signOutuser().then().catch();
  };
  console.log(user);
  return (
    <>
      <nav className="max-w-7xl mx-auto py-3.5 w-[95%] flex justify-between items-center lg:w-[97%]">
        <div className="flex items-center gap-3">
          <img className="h-[50px] sm:h-[55px]" src="/Logo.png" alt="" />
          <h1 className="text-xl text-[#348e38] font-bold sm:text-2xl">
            GreenNest
          </h1>
        </div>
        <div className="hidden lg:bg-[#348e38] lg:px-1.5 lg:py-1.5 lg:rounded-full lg:flex lg:gap-1.5 lg:text-white lg:font-semibold">
          <NavLink
            to={"/"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-[#348e38]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/plants"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-[#348e38]"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to={"/profile"}
            className={
              "px-5 py-3 rounded-full transition-all hover:bg-[#e7f6e9] hover:text-[#348e38]"
            }
          >
            My Profile
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-3">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  {user.photoURL ? (
                    <div className="h-[50px] w-[50px] border-2 border-[#348e38] rounded-full cursor-pointer overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={user.photoURL}
                        alt=""
                      />
                    </div>
                  ) : (
                    <FaCircleUser className="text-[50px] text-[#348e38] cursor-pointer" />
                  )}
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content bg-[#e7f6e9] mt-1.5 p-5 rounded-tr-lg rounded-4xl z-1 w-55 shadow"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">{user.displayName}</h3>
                    <button
                      onClick={handleSignOut}
                      className="btn bg-[#348e38] text-white rounded-full"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn p-5.5 bg-[#e7f6e9] text-[#348e38] border-[#348e38] rounded-full"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn p-5.5 bg-[#348e38] text-white rounded-full"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
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
                    <FaCircleUser className="text-[70px] text-[#348e38]" />
                  )}
                </div>
                <h3 className="font-semibold">{user.displayName}</h3>
              </div>
            )}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link
                to={"/"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-[#348e38] active:text-white"
              >
                <IoHome /> Home
              </Link>
              <Link
                to={"/plants"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-[#348e38] active:text-white"
              >
                <GiTreeBranch /> Plants
              </Link>
              <Link
                to={"/profile"}
                className="bg-white px-5 py-3 rounded-full flex items-center gap-1 active:bg-[#348e38] active:text-white"
              >
                <CgProfile /> My Profile
              </Link>
            </div>
            <div className="absolute bottom-4 flex flex-col gap-1.5 sm:gap-2">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn w-[188px] bg-[#348e38] text-white rounded-full sm:w-[268px]"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn p-5.5 w-[188px] bg-[#e7f6e9] text-[#348e38] border-[#348e38] rounded-full sm:w-[268px]"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn p-5.5 w-[188px] bg-[#348e38] text-white rounded-full sm:w-[268px]"
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