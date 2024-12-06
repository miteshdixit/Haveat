/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useCart, useCloseState } from "../components/Context"

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../main";

const CartData = () => {
  const cart = useCart();
  const {authToken } = useAuthContext()

  const { dispatch } = useCloseState();
 

  const navigate = useNavigate();


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.caloriesPerServing * item.quantity, 0);
  };

function handlOrder(){
if(authToken){
dispatch({ type: 'TOGGLE_MODEL' })
navigate("/order");
}else{
navigate('/login');
}
}

  return (
    <div className="cart-data">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          <ul >
            {cart.map((item, index) => (
              <li key={index} className="divider">
                <div>
                  <img src={item.image} alt={item.name} width={50} height={50} />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Meal Type: {item.mealType}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Calories per Serving: {item.caloriesPerServing}</p>
                  <p>Price: ₹{item.caloriesPerServing * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h3>Total Price: ₹{calculateTotalPrice()}</h3>
          </div>
          <div className="d-flex justify-content-end " onClick={handlOrder}> 
        
            <span className="Button_main">
              {authToken ? "order now!" : "login to order"}</span>
          
          </div>
        </div>
      
      )}
    </div>
  );
};

export default CartData;
