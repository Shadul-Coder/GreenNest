import { FaLeaf } from "react-icons/fa";
import pic1 from "../../assets/Eco Decor 1.jpg";
import pic2 from "../../assets/Eco Decor 2.jpg";
import pic3 from "../../assets/Eco Decor 3.jpg";
import pic4 from "../../assets/Eco Decor 4.jpg";

const EcoDecor = () => {
  const ideas = [
    {
      title: "Green Corners of Calm",
      desc: "Transform empty corners with tall indoor plants like fiddle leaf figs or monsteras. Perfect for adding height and freshness to living spaces.",
      img: pic1,
    },
    {
      title: "Kitchen Herb Haven",
      desc: "Line your kitchen window with small potted herbs — basil, mint, or rosemary. They add beauty and flavor to your daily cooking.",
      img: pic2,
      reverse: true,
    },
    {
      title: "Bedroom Oxygen Boost",
      desc: "Add air-purifying plants like snake plants or peace lilies near your bedside. They help you sleep better with cleaner air.",
      img: pic3,
    },
    {
      title: "Shelf of Serenity",
      desc: "Decorate shelves with small succulents, trailing pothos, and mini cacti for a vibrant yet minimalistic touch.",
      img: pic4,
      reverse: true,
    },
  ];
  return (
    <section id="ecoDecor" className="scroll-mt-35">
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          <span className="text-green-600">Eco</span> Decor Ideas
        </h2>
        <p className="text-center md:w-[70%] md:mx-auto md:text-lg">
          Discover creative ways to style your home with plants — adding life,
          freshness, and calm to every corner.
        </p>
      </div>
      <div className="space-y-5 md:space-y-7">
        {ideas.map((idea, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`flex flex-col ${
              idea.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center border border-gray-200 bg-gray-100 shadow-lg rounded-3xl overflow-hidden h-100 hover:shadow-xl sm:h-135 md:h-110 lg:h-125`}
          >
            <div className="flex-1 h-full w-full overflow-hidden relative group">
              <img
                src={idea.img}
                alt={idea.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
            </div>
            <div className="text-center p-5 space-y-3 sm:p-7 md:text-start md:p-5 md:flex-1 lg:p-7 lg:text-left">
              <h3 className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl">
                {idea.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {idea.desc}
              </p>
              <button className="btn mt-3 rounded-xl border-green-500 text-green-500">
                <FaLeaf className="text-green-500" /> Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcoDecor;