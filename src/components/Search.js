import { useState, useEffect } from "react";
const [searchInput, setSearchInput] = useState([]);
export const Search = () =>{
    return(
        <>
          <div className="search-container p-5 my-5 bg-pink-50">
            <input
              type="text"
              className="search-input h-10"
              placeholder="search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button
              className="search-btn p-2 m-5 bg-purple-500 text-white rounded-lg hover: backdrop-brightness-50"
              onClick={() => {
                const data = filterData(searchInput, allRestaurant);
                setRestaurant(data);
              }}
            >
              Search
            </button>
          </div>
          <div className=" flex flex-wrap">
            {restaurant &&
              restaurant.map((restaurant) => {
                return (
                  <Link to={"/restaurant/"+restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
                );
              })}
          </div>
        </>
      );
}