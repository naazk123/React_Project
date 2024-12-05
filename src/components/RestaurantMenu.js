import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { IMG_CDN_URL } from "./config.js";
import {CDN_URL} from "./config.js";
import useRestaurant from "./utils/useRestaurant.js";


const RestaurantMenu=()=>{
    const {id}=useParams();
    // console.log(params);
    //const [restaurant,setRes]=useState({});
    const restaurant=useRestaurant(id);
    
    
    return (
        <div>
            {/* <h1>{restaurant.aggregatedDiscountInfo.header}</h1> */}
            <h1>{id}</h1>
            <h1>{restaurant?.name}</h1>
            <img src={CDN_URL+restaurant?.cloudinaryImageId}/>
            <h1>City: {restaurant?.city}</h1>
            <h1>Cusines: {restaurant?.cuisines.join(", ")}</h1>
            
        </div>
    )
}

export default RestaurantMenu;