import { useState , useEffect} from "react";
import { MENU_URL } from "../config";

const useRestaurant=(id)=>
{
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo()
    {
        const data=await fetch(MENU_URL+id);
        const json=await data.json();
        console.log(json.data);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }

    return restaurant;
}

export default useRestaurant;