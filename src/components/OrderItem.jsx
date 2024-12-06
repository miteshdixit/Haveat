/* eslint-disable react/prop-types */
import { useCart } from "./Context";

function OrderItem({ onCheckout }) {
  const cart = useCart();
  // const name = "mitesh";
console.log(cart);
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.caloriesPerServing * item.quantity, 0);
  };

  return (
    <div className="d-flex ">
      <div className=" mb-4 w-50 border-end p-5">
      {cart.map((item, index) => (
        <div className="mb-5 container card " key={index}>
          <div className="ordercontainer w-30">
            <div className="orderImage m-1">
              <img src={item.image} className="rounded-start orderImage"
               alt="FOOD IMAGE" 
               style={{width:"100%"}}/>
            </div>
            <div className="">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <small className="text-body-secondary">Prepared in {item.time} minutes</small>
                </p>
              </div>
             
            </div>
                <p className="card-text span-2nd-row p-2 fs-6 text-body-secondary">Ingrediants:-{item.instructions.join(' ,')}</p>
           
          </div>
        </div>
      ))}
 </div>

      <div className="container ">
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="divider">
              <div className="d-flex justify-content-center align-item-center">
              <div className="m-3" >
                <img src={item.image} alt={item.name} width={50} height={50}
                 />
              </div>
              <div className="m-3" >
                <p>{item.name}</p>
                
                <p>Quantity: {item.quantity}</p>
                
                <p>Price: ₹{item.caloriesPerServing * item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-end">
          <button 
            type="button" 
            className="btn btn-warning text-dark font-weight-bolder"
            onClick={() => onCheckout({ name:"mitesh", amount: 100 , userId : cart.map((item) => item.id) })}
          >
            ₹{calculateTotalPrice()} Pay Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
