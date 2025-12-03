import member1 from "../../assets/Member 1.png";
import member2 from "../../assets/Member 2.png";
import member3 from "../../assets/Member 3.png";

const ExpertTeam = () => {
  return (
    <section id="experts" className="scroll-mt-35">
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          Meet Our <span className="text-green-600">Green</span> Experts
        </h2>
        <p className="text-center md:w-[70%] md:mx-auto md:text-lg">
          Our passionate plant specialists are here to guide you every step of
          the way — from choosing the right plant to keeping it thriving.
        </p>
      </div>
      <div className="grid gap-5 md:gap-0 md:grid-cols-3">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col items-center text-center"
        >
          <div className="relative mt-7 mb-19 w-65 h-65 md:w-55 md:h-55 lg:w-73 lg:h-73 flex items-center justify-center md:mb-15 lg:mt-9 lg:mb-21">
            <div className="absolute -bottom-5 w-full h-[95%] bg-linear-to-r from-green-600 to-green-500 rounded-[70px]"></div>
            <img src={member1} alt="" className="relative z-10 h-auto" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 md:text-2xl lg:text-4xl">
            Jes Nathalie
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Indoor Plant Specialist
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center text-center"
        >
          <div className="relative mt-7 mb-19 w-65 h-65 md:w-55 md:h-55 lg:w-73 lg:h-73 flex items-center justify-center md:mb-15 lg:mt-9 lg:mb-21">
            <div className="absolute -bottom-5 w-full h-[95%] bg-linear-to-r from-green-600 to-green-500 rounded-[70px]"></div>
            <img src={member2} alt="" className="relative z-10 h-auto" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 md:text-2xl lg:text-4xl">
            Ethan Manuel
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Soil & Fertilizer Expert
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col items-center text-center"
        >
          <div className="relative mt-7 mb-19 w-65 h-65 md:w-55 md:h-55 lg:w-73 lg:h-73 flex items-center justify-center md:mb-15 lg:mt-9 lg:mb-21">
            <div className="absolute -bottom-5 w-full h-[95%] bg-linear-to-r from-green-600 to-green-500 rounded-[70px]"></div>
            <img src={member3} alt="" className="relative z-10 h-auto" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 md:text-2xl lg:text-4xl">
            Rossieana
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Succulent & Cactus Advisor
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;