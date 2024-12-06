/* eslint-disable react/prop-types */

import { useState } from "react";
import { useCart, useDispatchCart } from "../components/Context";

function Card({ cardData }) {
  const cart = useCart();
  const dispatch = useDispatchCart();
  const [select, setSelect] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleAddtoCart(e) {
    e.preventDefault();
    const exist = cart.find((cartItem) => cartItem.id === cardData.id);
    if (!exist) {
      const item = {
        id: cardData.id,
        name: cardData.name,
        image: cardData.image,
        cuisine: cardData.cuisine,
        caloriesPerServing: cardData.caloriesPerServing,
        mealType: cardData.mealType,
        quantity: quantity,
        instructions: cardData.instructions,
        time: cardData.prepTimeMinutes,
      };
      setSelect(true);

      dispatch({
        type: "ADD",
        payload: item,
      });
      
    } else {
      const cartlist = cart.find((cartItem) => cartItem.id === cardData.id);
      setSelect(false);
      dispatch({
        type: "REMOVE",
        payload: cartlist,
      });
    }
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const totalPrice = cardData.caloriesPerServing * quantity;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="custom-card m-3" key={cardData.id}>
        <img
          src={cardData.image}
          className="card-img-top custom-card img "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{cardData.name}</h5>
          <p className="card-text">{cardData.cuisine}</p>
        </div>
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <select
            className="m-1 h-100"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {Array.from(Array(6), (e, i) => (
              <option value={i + 1} key={i} disabled={select}>
                {i + 1}
              </option>
            ))}
          </select>

          <select className="m-2 h-100 bg-success" style={{ color: "#fff" }}>
            {cardData.mealType.map((meal, index) => (
              <option key={index} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-between m-2">
          <button
            className={
              !select
                ? "btn bg-white text-success"
                : "btn btn-success text-white "
            }
            onClick={handleAddtoCart}
          >
            {!select ? "Add to Cart" : "remove"}
          </button>
          <div>{`₹ Price: ${totalPrice}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
