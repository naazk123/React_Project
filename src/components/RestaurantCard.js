export { restaurantList } from "./config";
export const swiggy_api_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


const RestaurantCard = ({ name,cuisines,avgRating,cloudinaryImageId,}) =>
    {
        return (
            <div className="card w-[200px] p-5 m-5 shadow-lg bg-purple-100 h-[330px] rounded-xl">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                    cloudinaryImageId } ></img>
                <h2 className="font-bold text-md">{name}</h2>
                <h3>{cuisines[0]}</h3>
                <h4 className="font-bold">{avgRating}</h4>
            </div>
        )
    }
export default RestaurantCard;