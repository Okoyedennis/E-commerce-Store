import React from "react";
import CarouselB from "../Carousel";
import MenProduct from "./MenProduct";

const Men = () => {
  return (
    <div className="home">
      <CarouselB />
      <div className="home__row">
        <MenProduct
          key={5}
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          price={109.95}
          rating={4}
        />{" "}
        <MenProduct
          id={2}
          title="Mens Casual Premium Slim Fit T-Shirts"
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          price={109.95}
          rating={4}
        />
      </div>
      <div className="home__row">
        <MenProduct
          key={3}
          title="Mens Cotton Jacket"
          description="great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          price={109.95}
          rating={4}
        />{" "}
        <MenProduct
          key={4}
          title="Mens Casual Slim Fit"
          description="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          price={109.95}
          rating={4}
        />
      </div>
    </div>
  );
};

export default Men;