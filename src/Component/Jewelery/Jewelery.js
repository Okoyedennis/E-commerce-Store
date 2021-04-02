import React from "react";
import CarouselB from "../Carousel";
import JeweleryProduct from "./JeweleryProduct";
import "../../Style/Jewelery.css";

const Jewelery = () => {
  return (
    <div className="home">
      <CarouselB />
      <div className="home__row">
        <JeweleryProduct
          key={5}
          title="Dragon Station Chain Bracelet"
          description="From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection."
          image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          price={4000}
          rating={5}
        />{" "}
        <JeweleryProduct
          id={6}
          title="Solid Gold Petite Micropave"
          description="Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days."
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          price={7000}
          rating={3}
        />
      </div>
      <div className="home__row">
        <JeweleryProduct
          key={7}
          title="White Gold Plated Princess"
          description="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..."
          image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
          price={10000}
          rating={4}
        />
        <JeweleryProduct
          id={6}
          title="Pierced Owl Rose Gold Plated Stainless Steel Double"
          description="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel"
          image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
          price={24000}
          rating={4}
        />
      </div>
    </div>
  );
};

export default Jewelery;
