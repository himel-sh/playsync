import React, { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/pBChQyMy/frthfcs.jpg",
    title: "Red Dead Redemption",
  },
  {
    id: 2,
    image: "https://i.ibb.co/nqS6mxDL/grn-trsmo.jpg",
    title: "Gran Turismo",
  },
  {
    id: 3,
    image: "https://i.ibb.co/p658CHNf/rdr.jpg",
    title: "The Last of Us",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
            index === current ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-sm p-3 rounded-md">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 btn btn-circle"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 btn btn-circle"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
