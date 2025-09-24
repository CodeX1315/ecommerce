
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const initialState = {
  cart: (JSON.parse(localStorage.getItem('cart') || "[]") || []).filter(
    (item) => item && item.id // only keep objects with id
  ),
  fav: (JSON.parse(localStorage.getItem('fav') || "[]") || []).filter(
    (item) => item && item.id // only keep objects with id
  )
};


    const [{cart, fav}, cartDispatch] = useReducer( cartReducer, initialState);
    return (
        <CartContext.Provider value={ { cart , fav,  cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider}