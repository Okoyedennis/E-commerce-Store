import React from "react";
import CurrencyFormat from "react-currency-format";
import "../../Style/Subtotal.css";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"}
      />
    </div>
  );
};

export default Subtotal;
