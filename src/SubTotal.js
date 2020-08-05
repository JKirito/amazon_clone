import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items): <strong>: {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains as a gift
            </small>
          </>
        )}
        displayType={"text"}
        thousandSeperator={true}
        decimalScale={2}
        prefix={"$"}
        value={getBasketTotal(basket)}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default SubTotal;
