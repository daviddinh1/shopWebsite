import { useState } from "react";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access the product from the state
  const [quantity, setQuantity] = useState(product.price);
  const[cart, setCart] = useState(0);


  function handleIncrease(){
    let val = quantity + product.price;
    setCart(cart + 1)
    setQuantity(val);
  }
  function handleDecrease(){
    let val = quantity - product.price;
    setCart(cart - 1);
    setQuantity(val);
  }

  function handleCart(){
   let val = cart + 1;
   setCart(val);
  }
  return(
   <div>
    <div>cart: {cart}</div>
    <img width='100px' height='100px' src={product.image}></img>
    <div>
     <button onClick={handleCart}>
      add to cart
     </button>
     <button onClick={handleDecrease}>-</button>
     <button onClick={handleIncrease}>+</button>
    </div>
    <div>price: {quantity}</div>
   </div>

  )
};

export default ShopPage;