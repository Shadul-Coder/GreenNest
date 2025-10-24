import Hero from "../components/Hero/Hero";
import TopRated from "../components/TopRated/TopRated";
import PlantCare from "../components/PlantCare/PlantCare";
import ExpertTeam from "../components/ExpertTeam/ExpertTeam";
import FAQ from "../components/FAQ/FAQ";
import EcoDecor from "../components/EcoDecor/EcoDecor";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <div className="max-w-7xl w-[95%] mx-auto space-y-10 mb-9 sm:space-y-11 sm:mb-13 md:space-y-13 lg:space-y-15 lg:mt-5 lg:mb-29 lg:w-[97%]">
      <Hero />
      <TopRated />
      <PlantCare />
      <ExpertTeam />
      <EcoDecor />
      <Review />
      <FAQ />
    </div>
  );
};

export default Home;