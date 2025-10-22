import { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutuser } = use(AuthContext);
  const handleSignOut = () => {
    signOutuser().then().catch();
  };
  return (
    <div className="max-w-7xl mx-auto w-[95%] flex justify-between items-center">
      <div className="flex items-center">
        <img className="h-[55px]" src="/Logo.png" alt="" />
        <h1>GreenNest</h1>
      </div>
      <div className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/plants"}>Plants</NavLink>
        <NavLink to={"/"}>My Profile</NavLink>
      </div>
      <div className="flex gap-3">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            SignOut
          </button>
        ) : (
          <>
            <Link to={"/register"} className="btn">
              SignUp
            </Link>
            <Link to={"/login"} className="btn">
              SigIn
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;