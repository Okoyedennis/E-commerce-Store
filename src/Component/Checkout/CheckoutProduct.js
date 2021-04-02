import React from "react";
import "../../Style/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import CurrencyFormat from "react-currency-format";

const CheckoutProduct = ({ id, price, image, title, description, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {title}: {truncate(description, 150)}
        </p>
        <p className="checkoutProduct__price">
          <strong>
            <CurrencyFormat
              renderText={(value) => <>{value}</>}
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })}
        </div>
        <button className="button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
