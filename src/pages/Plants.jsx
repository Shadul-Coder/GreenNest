import { useLoaderData } from "react-router";
import PlantBox from "../components/Plants/PlantBox";

const Plants = () => {
  const { data } = useLoaderData();
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-9 sm:my-13 lg:w-[97%] lg:mb-29">
      <div className="text-center space-y-3 md:space-y-5">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Discover Your Next
          <br />
          <span className="text-green-600">Green</span> Friend
        </h1>
        <p className="sm:mx-auto sm:w-[70%] md:text-lg">
          Explore our hand-picked collection of indoor plants — perfect for
          every space, every mood, every season.
        </p>
        <h3 className="text-start text-lg font-semibold mt-7 mb-5 md:text-xl lg:text-2xl lg:mt-10">
          Available Plants ({data.length})
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((plant) => (
          <PlantBox key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;