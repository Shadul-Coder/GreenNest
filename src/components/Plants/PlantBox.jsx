import { Link } from "react-router";

const PlantBox = ({ plant }) => {
  const { plantId, plantName } = plant;
  return (
    <div className="p-5 border rounded-2xl">
      <h1>{plantName}</h1>
      <Link to={`/plants/${plantId}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default PlantBox;