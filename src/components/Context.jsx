/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";


const CartContext = createContext()
const CartDispatch = createContext();
const CloseContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const newState = [...state, action.payload];
      console.log('Updated Cart:', newState); 
      return newState;
    }
    case 'REMOVE': {
      const newState = state.filter(item => item.id !== action.payload.id);
      console.log('Updated Cart after removal:', newState); 
      return newState;
    }
    default:
      console.log('Error in reducer');
      return state;
  }
}



export function CartProvider({children}){

  const [state , dispatch] = useReducer(reducer ,[])
  
  return(
    <CartDispatch.Provider value={dispatch}>
      <CartContext.Provider value={state}>
        {children}
      </CartContext.Provider>
    </CartDispatch.Provider>

  )
}
const modalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODEL':
      return !state; // Toggle between true and false
    case 'OPEN_MODEL':
      return true; // Set modal state to true
    case 'CLOSE_MODEL':
      return false; // Set modal state to false
    default:
      return state;
  }
};

export function CloseModelProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, false);

  return (
    < CloseContext.Provider value={{ state, dispatch }}>
      {children}
    </ CloseContext.Provider>
  );
}

const UserIdContext = createContext();

export const UserIDProvider = ({ children }) => {
  const [UserID, setUserID] = useState(localStorage.getItem("userID"));
  console.log("Current UserID in Provider:", UserID); // Debug log
  return (
    <UserIdContext.Provider value={{ UserID, setUserID }}>
      {children}
    </UserIdContext.Provider>
  );
};
export const useUserIDContext = () => useContext(UserIdContext);

 const useCart= () => useContext(CartContext);
 const useDispatchCart = () => useContext(CartDispatch);
const useCloseState = () => useContext(CloseContext);

export {useCart , useDispatchCart , useCloseState}