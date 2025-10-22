import { useLoaderData } from "react-router";
import PlantBox from "../components/Plants/PlantBox";

const Plants = () => {
  const { data } = useLoaderData();
  return (
    <div className="grid grid-cols-5 gap-3">
      {data.map((plant) => (
        <PlantBox key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;