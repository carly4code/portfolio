import React, { useState, useEffect } from "react";

const TextSlider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
      {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item${
              index === activeIndex ? " active" : ""
            }`}
          >
            <div>
            <p>{item.title}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;