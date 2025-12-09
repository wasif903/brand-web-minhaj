import React, { useState } from "react";

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "DIGITAL MARKETING",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Get your business noticed and started on the platform.",
    },
    {
      id: 2,
      title: "UI/UX DESIGNING",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Get your business noticed and started on the platform. ",
    },
    {
      id: 3,
      title: "WEBSITE DEVELOPMENT",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Get your business noticed and started on the platform. ",
    },
    {
      id: 4,
      title: "SEARCH ENGINE OPTIMIZATION",
      image:
        "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&q=80",
      description: "Get your business noticed and started on the platform. ",
    },
  ];

  return (
    <section className="pt-20 sm:pt-20 lg:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h6 className="text-center uppercase text-textBlue fontJakartaSemiBold text-xl">
            OUR SERVICES
          </h6>
          <h3 className="text-center">Transform Your Business</h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[450px] overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className={`transition-all duration-500 ${
                    hoveredCard === service.id ? "transform -translate-y-0" : ""
                  }`}
                >
                  <p className="text-white font-bold text-2xl relative z-10">
                    {service.title}
                  </p>
                  {/* Description - Slides up on hover */}
                  <div
                    className={`transition-all duration-500 ${
                      hoveredCard === service.id
                        ? "translate-y-0 opacity-100 mb-4 max-h-96"
                        : "translate-y-full opacity-0 mb-0 max-h-0"
                    }`}
                  >
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="text-white font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More
                      <span>→</span>
                    </button>
                  </div>

                  {/* Title - Always visible at bottom */}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
