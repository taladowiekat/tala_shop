import axios from "axios";
import { createContext, useState } from "react";


export const CartContext = createContext(null);
export function CartContextProvider({children}){

    let[count , setcount]=useState(0);


    const addToCartContext = async(productId)=>{
        try{
            const token = localStorage.getItem("userToken")
            const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId},
            {headers:{Authorization:`Tariq__${token}`}})
            return data;
        }
        catch(error){
            console.log(error)
        }
    }


    const getCartContext = async()=>{
        try{
            const token = localStorage.getItem("userToken")
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
            {headers:{Authorization:`Tariq__${token}`}})
            setcount(++count);

            return data;
        }
        catch(error){
            console.log(error)
        }
    }
    

    const removeItemContext = async(productId)=>{
        try{
            const token = localStorage.getItem("userToken")
            const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,
            {productId},
            {headers:{Authorization:`Tariq__${token}`}})
            return data;
        }
        catch(error){
            console.log(error)
        }
    }
    return <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext,count,setcount}}>
        {children}
    </CartContext.Provider>
}