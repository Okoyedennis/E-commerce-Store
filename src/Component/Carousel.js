import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/banner1.jpg";
import img2 from "../img/banner2.jpg";

const CarouselB = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    indicators: false,
    button: false,
  };
  return (
    <div>
      <Carousel
        className="home__image"
        interval={3000}
        activeIndex={index}
        onSelect={handleSelect}
        {...settings}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselB;
