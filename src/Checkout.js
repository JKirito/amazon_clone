import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.png"
          alt=""
          className="checkout__ad"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty!!!</h2>
            <p>
              You Have No Items in the Basket. Please ADD TO Your Basket to do
              Soo..
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
