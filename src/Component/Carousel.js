import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/banner1.jpg";
import img2 from "../img/banner2.jpg";
import img3 from "../img/banner3.jpg";
import img4 from "../img/banner4.jpg";
import img5 from "../img/banner5.jpg";

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
        interval={5000}
        activeIndex={index}
        onSelect={handleSelect}
        {...settings}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img3} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselB;
