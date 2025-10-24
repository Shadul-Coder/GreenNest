import { useNavigate } from "react-router";
import notfound from "../../assets/Not Found.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="h-[350px] flex flex-col justify-center items-center gap-5 sm:h-[400px] md:gap-7 lg:h-[500px]">
      <div className="space-y-3">
        <img
          className="mx-auto h-[170px] sm:h-[190px] md:h-[220px] lg:h-[250px]"
          src={notfound}
          alt=""
        />
        <p className="text-center text-gray-700 md:text-lg">
          Oops! We couldn’t find that plant.
        </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:text-lg md:p-6"
      >
        Go Back
      </button>
    </section>
  );
};

export default NotFound;