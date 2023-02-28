const Body = () => {
  return (
    <div className="restaurant-list">
      {restrauntList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};


export default Body;