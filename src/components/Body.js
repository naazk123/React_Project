import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { restaurantList } from "./config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper.js";
import useCheckOffline from "./utils/useCheckOffline.js";

const Body = () => {
  // const searchTxt="KFC";
  
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  const offline= useCheckOffline();
  if(offline)
  {
    <h1>Oops!!! You are offline please check Your internet connection</h1>
  }
  {
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&ihttps://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGs-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(restaurant);
  }
}

  

  console.log("render");
  if (!allRestaurant) return null;

  // if(restaurant.length===0) return <h1>No Match Found</h1>

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 my-5 bg-pink-100 ">
        <input
          type="text"
          className="search-input h-10 rounded-xl p-2 "
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          
        />
        <button
          className="search-btn p-2 m-5 bg-purple-500 text-white rounded-lg hover: backdrop-brightness-50 "
          onClick={() => {
            const data = filterData(searchInput, allRestaurant);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-wrap m-7">
        {restaurant &&
          restaurant.map((restaurant) => {
            return (
              <Link to={"/restaurant/"+restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
            );
          })}
      </div>
    </>
  );
};
export default Body;
