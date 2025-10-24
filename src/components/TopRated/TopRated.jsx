import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import PlantBox from "../PlantBox/PlantBox";
import Loading from "../Loading/Loading";

const TopRated = () => {
  const [topPlants, setTopPlants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  useEffect(() => {
    const topNo = ["VB781", "GS947", "LV869", "CP889", "SB971"];
    const getData = async () => {
      const res = await axios("/plants.json");
      const selectedPlants = res.data.filter((plant) =>
        topNo.includes(plant.plantId)
      );
      setTopPlants(selectedPlants);
    };
    getData();
  }, []);
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(4);
      } else if (width < 768) {
        setVisibleCount(3);
      } else if (width < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <section>
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          Top Rated Indoor <span className="text-green-600">Plants</span>
        </h2>
        <p className="text-center md:text-lg">
          Loved by plant parents — our best-selling and easy-to-care-for greens.
        </p>
      </div>
      {topPlants.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topPlants.slice(0, visibleCount).map((plant) => (
              <PlantBox key={plant.plantId} plant={plant} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to={"/plants"}
              className="mt-5 btn bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl md:mt-7"
            >
              Explore More
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default TopRated;