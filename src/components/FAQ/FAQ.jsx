const FAQ = () => {
  const faq = [
    {
      id: 1,
      question: "How often should I water my indoor plants?",
      answer:
        "It depends on the plant type, but most indoor plants prefer watering once a week. Always check if the top inch of soil is dry before watering again.",
    },
    {
      id: 2,
      question: "Do I need direct sunlight for my plants?",
      answer:
        "Not necessarily. Many indoor plants grow best in bright, indirect sunlight. Avoid harsh afternoon rays that can burn the leaves.",
    },
    {
      id: 3,
      question: "What’s the best fertilizer for houseplants?",
      answer:
        "A balanced, water-soluble fertilizer (10-10-10) works well for most indoor plants. Use it once every 4–6 weeks during the growing season.",
    },
    {
      id: 4,
      question: "Can I book a consultation for plant care advice?",
      answer:
        "Yes! You can book a consultation with our green experts directly from the plant details page after logging in.",
    },
    {
      id: 5,
      question: "How do I know if a plant is pet-friendly?",
      answer:
        "Check the plant details section on each product card — we include a 'Pet Safe' tag for plants that are non-toxic to cats and dogs.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-35">
      <div className="space-y-1.5 mb-7 sm:space-y-3 md:mb-9 lg:mb-11">
        <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          <span className="text-green-600">Frequently</span> Asked Questions
        </h2>
        <p className="text-center md:w-[70%] md:mx-auto md:text-lg">
          Got questions? We’ve got answers — here’s everything you need to know
          about caring for your plants and using GreenNest.
        </p>
      </div>
      <div className="space-y-1.5 md:space-y-3">
        {faq.map((que) => (
          <div
            key={que.id}
            className="collapse collapse-plus bg-green-50/50 border border-green-400"
          >
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">{que.question}</div>
            <div className="collapse-content text-gray-500 text-sm">
              {que.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;