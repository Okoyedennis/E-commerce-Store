import React from "react";
import CarouselB from "../Carousel";
import WomenProduct from "./WomenProduct";

const Women = () => {
  return (
    <div className="home">
      <CarouselB />

      <div className="home__row">
        <WomenProduct
          id={15}
          title="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
          description="Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates"
          image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
          price={3500}
          rating={4}
        />
        <WomenProduct
          id={16}
          title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
          description="100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON"
          image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
          price={4000}
          rating={4}
        />
      </div>
      <div className="home__row">
        <WomenProduct
          id={17}
          title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
          description="Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look."
          image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
          price={2500}
          rating={4}
        />
        <WomenProduct
          id={18}
          title="MBJ Women's Solid Short Sleeve Boat Neck V"
          description="95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem"
          image="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
          price={3000}
          rating={4}
        />{" "}
        <WomenProduct
          id={19}
          title="Opna Women's Short Sleeve Moisture"
          description="100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort"
          image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
          price={3000}
          rating={4}
        />
      </div>
      <div className="home__row">
        <WomenProduct
          id={20}
          title="DANVOUY Womens T Shirt Casual Cotton Short"
          description="95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter."
          image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
          price={4000}
          rating={4}
        />
      </div>
    </div>
  );
};

export default Women;
