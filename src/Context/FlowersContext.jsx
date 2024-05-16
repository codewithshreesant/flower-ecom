import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext, useReducer } from 'react'
import { createContext } from 'react';

const AppContext=createContext();
const api="https://flowers-five-alpha.vercel.app/api/flowers";

const reducer=(state, action)=>{
    switch (action.type){
        case 'loaded':
            return{
            ...state,
            isloaded: true
            }

        case 'Error':
            return{
                ...state,
                isError:true
            }
        case 'get_data':
            return{
                ...state,
                products:action.payload
            }
        case 'single_product':
            return{
                ...state,
                singleProduct:action.payload
            }
        case 'update_filter_section':
            return{
                ...state,
                filter:{
                    ...state.filter, [action.payload.name]:action.payload.value
                }
            }
        case 'Filter_Products':
            let {products}= state;
            console.log(products);
            let tempProducts={...products};

            const {text}= state.filter;
            console.log(tempProducts);
            let filterTempproducts=tempProducts;

            if(text){
                tempProducts=filterTempproducts.data?.filter((curele)=>{
                    return curele.name.includes(text);
                })
            }

            return{
                ...state,
                filterProducts:tempProducts
            }
        default:
            return
    }
}

const initialState={
    isloading:false,
    isError:false,
    products: [],
    singleProduct: {},
    filter:{
        text: ""
    },
    filterProducts: []
}



const AppProvider=({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const getProducts=async (url)=>{
        dispatch({type:'loaded'})
        try{
        const products=await axios.get(url);
        const data=products.data;
        dispatch({type:'get_data', payload:data});
        }catch(error){
            dispatch({type:'Error'})
        }
    }

                

    const getSingleProduct=async (id)=>{
        const singleData=await axios.get("https://flowers-five-alpha.vercel.app/api/flowers?_id="+id);
        const single_actual_data=singleData.data.data[0];
        console.log(single_actual_data);
        dispatch({type: 'single_product', payload:single_actual_data})
    }
   
    const updateFilterSection=(event)=>{
        let name=event.target.name;
        let value=event.target.value;

        dispatch({type: "update_filter_section", payload: {name, value}});
    }

    useEffect(()=>{
        
        getProducts("https://flowers-five-alpha.vercel.app/api/flowers");
    },[])

    useEffect(()=>{
        dispatch({type: 'Filter_Products'});
    },[state.filter])
    return <AppContext.Provider value={{...state, getSingleProduct, updateFilterSection}} >{children}</AppContext.Provider>
}


export {AppProvider, AppContext};