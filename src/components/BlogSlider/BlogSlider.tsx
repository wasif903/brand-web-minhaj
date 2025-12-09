import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";

export default function BlogSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      category: "Technology",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest innovations shaping the future of web development, from AI integration to progressive web apps.",
      author: "John Smith",
      date: "Dec 5, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Business",
      title: "Digital Transformation: A Guide for Modern Enterprises",
      excerpt:
        "Learn how successful companies are leveraging digital tools to streamline operations and boost productivity.",
      author: "Sarah Johnson",
      date: "Dec 3, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Marketing",
      title: "SEO Strategies That Actually Work in 2025",
      excerpt:
        "Discover proven SEO techniques that will help your website rank higher and attract more organic traffic.",
      author: "Mike Chen",
      date: "Dec 1, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      category: "Design",
      title: "UI/UX Design Principles for Better User Experience",
      excerpt:
        "Master the fundamental principles of creating intuitive and engaging user interfaces that convert.",
      author: "Emma Wilson",
      date: "Nov 28, 2024",
      readTime: "8 min read",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      category: "Development",
      title: "Building Scalable Applications with Modern Frameworks",
      excerpt:
        "A comprehensive guide to choosing and implementing the right tech stack for your next big project.",
      author: "David Lee",
      date: "Nov 25, 2024",
      readTime: "10 min read",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className=" bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className="text-center uppercase text-textBlue fontJakartaSemiBold text-xl">
            Our Blog
          </h6>
          <h3 className="">
            Latest Insights & Articles
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our
            experts
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-full">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div>
                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{blog.date}</span>
                            </div>
                            <span>• {blog.readTime}</span>
                          </div>

                          {/* Read More Button */}
                          <button className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                } h-2`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
