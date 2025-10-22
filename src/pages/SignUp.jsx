import { use, useState } from "react";
import AuthContext from "../context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createEmailPass, update } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    createEmailPass(email, password)
      .then((res) => {
        update(res.user, name, photo).then().catch();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="text" placeholder="" name="name" className="input" />
        <input type="email" placeholder="" name="email" className="input" />
        <input type="url" placeholder="" name="photo" className="input" />
        <input
          type="password"
          placeholder=""
          name="password"
          className="input"
        />
        <input type="submit" value="SignUp" className="btn" />
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;