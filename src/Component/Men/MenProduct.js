import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

const MenProduct = ({ id, price, title, image, description, rating }) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    if (user === null) {
      alert("Please Sign-In or Create Account");
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          description: description,
        },
      });
    }
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div className="products">
      <div className="product__info">
        <p>
          <strong>{title}: </strong> {truncate(description, 100)}
        </p>
        <p className="product__price">
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
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default MenProduct;
