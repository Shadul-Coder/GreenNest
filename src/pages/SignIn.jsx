import { use } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const { signinEmailPass, signGoogle } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signinEmailPass(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="email" placeholder="" name="email" className="input" />
        <input
          type="password"
          placeholder=""
          name="password"
          className="input"
        />
        <input type="submit" value="SignIn" className="btn" />
      </form>
      <button onClick={handleGoogleSignIn} className="btn">
        Continue With Google
      </button>
    </div>
  );
};

export default SignIn;