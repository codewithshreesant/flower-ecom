import { createContext } from "react";
import { useReducer, useEffect } from "react";


const CardContext = createContext();

const reducer = (state, action) => {
    if (action.type === 'card_add') {
        return {
            name: action.payload.name,
            price: action.payload.price,
            img: action.payload.img,
            amount: action.payload.amount
        }
    }
}

const initialState = {
    name: "",
    price: "",
    img: "",
    amount: ""
}


const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = (name, price, img,amount) => {
        dispatch({ type: 'card_add', payload: { name, price, img, amount } })
    }

    return <CardContext.Provider value={{ ...state, AddToCart }}>{children}</CardContext.Provider>
}

export {CardContext, CardProvider};