import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
        />

      <div>
      {user ? 
        <h3>Hello, {user?.email}</h3>
        : ''
      }
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map(item => 
            <CheckoutProduct 
              id={item.id} 
              title={item.title} 
              image={item.image} 
              price={item.price} 
              rating={item.rating} />
        )}
        
        
      </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    

      
      
    </div>
  );
}

export default Checkout;
