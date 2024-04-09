import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleStartBuilding = () => {
    history("/build");
  };

  return (
    <div className="mt-4 mx-auto w-[93%]">
      <div className="bg-white flex flex-col shadow-2xl h-56 overflow-hidden rounded-lg md:h-[23rem] items-center justify-start">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 flex flex-col items-center ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <div className="w-16 h-8 self-center rounded-full bg-[#539BBB] flex items-center justify-center my-12">
              <span className="text-white">{`${index + 1}/${
                slides.length
              }`}</span>
            </div>
            <p className="mb-1 w-4/5 text-center text-2xl text-black font-bold">
              Build your development value stream map
            </p>
            <button
              className="px-8 py-2 mt-8 self-center border-none text-white font-medium text-lg rounded-full bg-[#27667F] flex items-center justify-center cursor-pointer"
              onClick={handleStartBuilding}
            >
              Start Building
            </button>
          </div>
        ))}
        <div className="z-30 flex h-full items-end mb-8 bottom-2 transform -translate-x-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full outline-none border-0 ${
                currentSlide === index ? "bg-[#539BBB]" : "bg-[#616161]"
              }`}
              aria-current={currentSlide === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
