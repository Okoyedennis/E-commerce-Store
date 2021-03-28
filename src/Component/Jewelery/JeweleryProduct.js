import React from "react";
import { useStateValue } from "../StateProvider";

const JeweleryProduct = ({ id, image, price, description, title, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
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
          <small>N</small>
          <strong>{price}</strong>
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

export default JeweleryProduct;
