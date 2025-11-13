import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/slider.css";

const Slider = ({ items = [] }) => {
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Prevent rapid clicks
    let clickTimeout;
    const handleNext = () => {
      setCarouselItems(prev => {
        const newItems = [...prev];
        newItems.push(newItems.shift());
        return newItems;
      });
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {}, 500); // delay for pointer re-enable
    };

    const handlePrev = () => {
      setCarouselItems(prev => {
        const newItems = [...prev];
        newItems.unshift(newItems.pop());
        return newItems;
      });
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {}, 500);
    };

    // Expose handlers globally for buttons (optional)
    window.sliderNext = handleNext;
    window.sliderPrev = handlePrev;

    return () => clearTimeout(clickTimeout);
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {carouselItems.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={() => window.sliderPrev()}>&#8592;</button>
        <button onClick={() => window.sliderNext()}>&#8594;</button>
      </div>
    </div>
  );
};

export default Slider;
