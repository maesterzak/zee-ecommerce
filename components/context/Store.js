import { createContext, useReducer } from "react";
import CartController from "../cartController";
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
export const storeContext = createContext();

const initialState = {
//   cart: typeof window !== "undefined" ? localStorage.getItem('cart')
//     ? JSON.parse(localStorage?.getItem("cart"))
//     : { content: [], amount: 0 } : { content: [], amount: 0 },
cart :  { content: [], amount: 0 }


};
function reducer(state, action) {
    const payload = action.payload
  switch (action.type) {
    case "CART_ADD_ITEM": {
      
        console.log("adding")
        let cartContent = CartController('add', payload)
    
        return { ...state, cart: cartContent };
    }
    case "CART_REMOVE_ITEM": {
        let cartContent = CartController('remove', payload)
    
    return { ...state, cart: cartContent };
    }
    case "CART_DELETE_ITEM": {
        let cartContent = CartController('delete', payload);
        return { ...state, cart: cartContent };
      
    }
    case "SET_CART": {
        // let cartContent = CartController('delete', payload);
        let cartContent = JSON.parse(localStorage?.getItem("cart")) ?? { content: [], amount: 0 }
        return { ...state, cart: cartContent };
      
    }
    case "SAVE_SHIPPINIG_ADDRESS": {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    }
    case "SAVE_PAYMENT_METHOD": {
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  console.log("pl", state)
  return <storeContext.Provider value={value}>{children}</storeContext.Provider>;
}