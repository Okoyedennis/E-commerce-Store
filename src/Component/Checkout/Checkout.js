import React from "react";
import Subtotal from "./Subtotal";
import "../../Style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Payment from "../Payment";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

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
        <div className="checkout__textWarning">
          <h4>*Please use the following text credit card for payment*</h4>
          <h3>4242 4242 4242 4242 - Exp: 01/22 - CVW:123</h3>
        </div>
        <div className="checkout__payment">
          <Payment />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
