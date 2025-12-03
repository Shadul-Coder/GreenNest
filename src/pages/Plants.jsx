import { useLoaderData } from "react-router";
import PlantBox from "../components/PlantBox/PlantBox";
import { useState } from "react";

const Plants = () => {
  const { data } = useLoaderData();
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", ...new Set(data.map((plant) => plant.category))];
  const filteredPlants =
    selectedCategory === "all"
      ? data
      : data.filter((plant) => plant.category === selectedCategory);
  const sortedAndFilteredPlants = [...filteredPlants].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else if (sortOrder === "descending") {
      return b.price - a.price;
    }
    return 0;
  });
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-9 sm:my-13 lg:w-[97%] lg:mb-29">
      <div className="text-center space-y-3 md:space-y-5">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Discover Your Next
          <br />
          <span className="text-green-600">Green</span> Friend
        </h1>
        <p className="sm:mx-auto sm:w-[70%] md:text-lg">
          Explore our hand-picked collection of indoor plants — perfect for
          every space, every mood, every season.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row md:justify-center">
          <select
            className="select select-bordered w-full md:w-xs outline-none focus:border-[#e8f5e9] rounded-xl"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories
              .filter((cat) => cat !== "all")
              .map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <select
            className="select select-bordered w-full md:w-xs outline-none focus:border-[#e8f5e9] rounded-xl"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by Price</option>
            <option value="ascending">Price: Low to High</option>
            <option value="descending">Price: High to Low</option>
          </select>
        </div>
        <h3 className="text-start text-lg font-semibold mt-7 mb-5 md:text-xl lg:text-2xl lg:mt-10">
          Available Plants ({sortedAndFilteredPlants.length})
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {sortedAndFilteredPlants.map((plant) => (
          <PlantBox key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
