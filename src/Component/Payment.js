import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";

const Payment = ({ currency }) => {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  const priceForStripe = currency * 100;
  const publishablekey =
    "pk_test_51IbB5iJrhAChGpxwxROklguJqVX3OZiG6e2tnHjegK4jwuAFGWmUtGYtLWvDF0EGE4qsI5wfeNguLtPA4XNGJ24I00mo8wN45I";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Dennis"
        billingAddress
        shippingAddress
        description={`Your total is ₦${getBasketTotal(basket)}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
      />
    </div>
  );
};

export default Payment;
