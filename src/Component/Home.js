import React from "react";
import "../Style/Home.css";
import Carousel from "./Carousel";

import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
        <div className="home__row">
          <Products
            id={19}
            title="Opna Women's Short Sleeve Moisture"
            description="100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort"
            image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
            price={3000}
            rating={4}
          />
          <Products
            key={2}
            title="Mens Casual Premium Slim Fit T-Shirts"
            description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
            image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            price={4000}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Products
            id={9}
            title="WD 2TB Elements Portable External Hard Drive - USB 3.0 "
            description="USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
            image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            price={15000}
            rating={4}
          />
          <Products
            key={4}
            title="Mens Casual Slim Fit"
            description="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
            image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            price={5000}
            rating={5}
          />
          <Products
            key={5}
            title="Dragon Station Chain Bracelet"
            description="From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection."
            image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            price={4000}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Products
            key={7}
            title="White Gold Plated Princess"
            description="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..."
            image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            price={10000}
            rating={4}
          />
          <Products
            id={14}
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
            description="49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag"
            image="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            price={400000}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
