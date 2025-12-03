import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PlantBox = ({ plant }) => {
  const { plantId, plantName, price, rating, description, image } = plant;
  return (
    <div className="rounded-2xl shadow overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden sm:h-52 md:h-56 lg:60">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-linear-to-r from-green-600 to-green-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1">
          <FaStar className="text-yellow-300 text-sm" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="p-3 flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{plantName}</h3>
        <p className="truncate text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-green-600 font-bold text-sm lg:text-lg">
            ${price.toFixed(2)}
          </p>
          <Link
            to={`/plants/${plantId}`}
            className="bg-linear-to-r from-green-500 to-green-600 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full shadow transition-all duration-300 hover:shadow-md hover:-translate-y-px"
          >
            Plant Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantBox;
