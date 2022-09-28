import { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// Data
import { data } from "../../data";

import "./Carousel.scss";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { width } = windowSize;

  return (
    <>
      {width > 640 ? (
        <div className="carousel my-12 mx-auto con">
          <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-center">
            Shop by brands
          </h2>
          <div className="relative overflow-hidden flex items-center justify-between">
            <button
              onClick={movePrev}
              className="button-scroll transition-all ease-in-out duration-300 mr-3.5 hidden md:block"
              disabled={isDisabled("prev")}
            >
              <FaChevronLeft className="font-bold" />
            </button>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 mx-3.5"
            >
              {data.resources.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-52 h-44 snap-start"
                  >
                    <Link
                      to="/"
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 relative rounded-xl"
                      style={{
                        backgroundImage: `url(${resource.imageUrl || ""})`,
                      }}
                    >
                      <img
                        src={resource.imageUrl || ""}
                        alt={resource.title}
                        className="w-full aspect-square hidden object-cover"
                      />
                    </Link>
                    <div className="overlay w-full h-full absolute top-0"></div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={moveNext}
              className="button-scroll z-10  transition-all ease-in-out duration-300 md:block hidden"
              disabled={isDisabled("next")}
            >
              <FaChevronRight className="font-bold" />
            </button>
          </div>
        </div>
      ) : (
        <div className="carousel my-12 mx-auto">
          <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-center">
            Shop by brands
          </h2>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-3 overflow-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0 mx-3.5"
          >
            {data.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-24 h-24 snap-start"
                >
                  <Link
                    to="/"
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 relative rounded"
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="w-full aspect-square object-cover rounded"
                    />
                  </Link>
                  <div className="overlay w-full h-full absolute top-0"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
