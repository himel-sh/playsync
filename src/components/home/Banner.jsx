import React, { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";

const Banner = () => {
  const [slidesdata, setSlidesdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch JSON data
  useEffect(() => {
    fetch("/gamedata.json")
      .then((res) => res.json())
      .then((data) => setSlidesdata(data))
      .catch((err) => console.error("Error loading banner data:", err));
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (slidesdata.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesdata.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slidesdata]);

  if (slidesdata.length === 0) {
    return <FourSquare color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />;
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden mt-10 rounded-2xl">
      {slidesdata.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.coverPhoto}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Game Title */}
          <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-sm p-3 rounded-md">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
        <button
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + slidesdata.length) % slidesdata.length
            )
          }
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % slidesdata.length)
          }
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
