
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

function filteredRestaurants(searchText) {
  const data = restaurantList.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  console.log(data);
  console.log(restaurantList);

  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(()=> {
    // console.log("call this when dependecy is changed");
    getRestaurants();
  }, [])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5709904&lng=77.07184079999999&page_type=DESKTOP_WEB_LISTING")
    
    const json = await data.json()
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants.length === 0 ? (
    <Shimmer/>
  ) :     (
    <>
      <div className="search-container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filteredRestaurants(searchText);
              setRestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
