import React from "react";
import Subtotal from "./Subtotal";
import "../../Style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__ad"
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket?.map((item) => {
          return (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
