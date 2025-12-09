import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const OurClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO",
      company: "TechStart Inc",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      text: "Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence exceeded all our expectations. The results speak for themselves - our productivity increased by 300%.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "Digital Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      text: "The level of professionalism and technical expertise is unmatched. They delivered our project on time and within budget, while maintaining exceptional quality throughout. I highly recommend their services to anyone looking for top-tier solutions.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Growth Ventures",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      text: "Outstanding experience from start to finish! The team was responsive, creative, and truly understood our vision. They transformed our digital presence and helped us achieve remarkable growth in just a few months.",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder",
      company: "Startup Hub",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "Their strategic approach and attention to detail made all the difference. Not only did they deliver exceptional results, but they also educated our team along the way. True partners in every sense of the word.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP Operations",
      company: "Enterprise Corp",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      rating: 5,
      text: "I've worked with many agencies over the years, and this team stands out for their creativity, reliability, and results-driven approach. They've become an integral part of our success story.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  return (
    // <section className=" bg-white  flex flex-col md:gap-16 gap-5 2xl:px-80 lg:px-40 px-10">
    //   <h3 className="uppercase text-center">Our satisfied Clients</h3>
    //   <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 place-items-center space-y-0">
    //     <Image src={"/Images/home/ClientIcons/Client1.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client2.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client3.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client4.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client5.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client4.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client3.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client2.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client5.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //     <Image src={"/Images/home/ClientIcons/Client1.png"} className="md:w-50 w-32" alt="Icons" width={200} height={200} />
    //   </div>
    // </section>
    <section className=" bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h3 className="">
            What Our Clients Say
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 opacity-10">
                      <Quote
                        className="w-24 h-24 text-blue-600"
                        fill="currentColor"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>

                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 bg-white rounded-full p-3 sm:p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 bg-white rounded-full p-3 sm:p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                } h-2`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
