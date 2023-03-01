// import { useState } from "react";
// import { restaurantList } from "../config";

// // import { RestrauntCard } from "./RestrauntCard";
// import RestrauntCard from "./RestrauntCard";

// function filterData(searchInput, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant.data.name.includes(searchInput)
//   );
//   return filterData;
// }

// const Body = () => {
//   // let searchTxt = "KFC";

//   const [restaurants, setRestaurants] = useState(restaurantList);
//   const [searchInput, setSerchInput] = useState("");

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchInput}
//           onChange={(e) => {
//             setSerchInput(e.target.value);
//           }}
//         />

//         <button
//           className="search-btn"
//           onClick={() => {
//             //need to filter data
//             const data = filterData(searchInput, restaurants);
//             //update
//             setRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => {
//           return (
//             <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;

import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

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

  return (
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