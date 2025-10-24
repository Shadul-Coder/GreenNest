import watering from "../../assets/Watering.jpg";
import sunlight from "../../assets/Sunlight.jpeg";
import fertilizing from "../../assets/Fertilizing.jpg";

const PlantCare = () => {
  return (
    <section>
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          <span className="text-green-600">Plants</span> Care Made Easy
        </h2>
        <p className="text-center md:text-lg">
          Simple guides to help your greens thrive every season.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700 md:row-span-2"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${watering})` }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white backdrop-blur-[2px]">
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                Watering Tips
              </h2>
              <p className="text-base opacity-90 font-medium">
                💧 Tip : Always ensure your pots have proper drainage holes.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-xl font-semibold leading-relaxed">
                Water your plants only when the top inch of soil feels dry. Keep
                soil moist, not soggy — your roots will thank you.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${sunlight})` }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                Sunlight Tips
              </h2>
              <p className="text-base opacity-90 font-medium">
                ☀️ Tip : Rotate your plants weekly for even light exposure.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100">
              <p className="text-xl font-semibold leading-relaxed">
                Most indoor plants love bright, indirect sunlight. Avoid harsh
                rays, especially during midday.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative min-h-[200px] group rounded-3xl overflow-hidden shadow transition-all duration-700"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${fertilizing})` }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/80"></div>

          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                Fertilizing Tips
              </h2>
              <p className="text-base opacity-90 font-medium">
                🌿 Tip : Water before applying fertilizer to avoid root burn.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-700 text-center group-hover:opacity-100">
              <p className="text-xl font-semibold leading-relaxed">
                Feed plants every 4–6 weeks during growing seasons. Skip feeding
                during winter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;