import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const RestaurantCard = () => {
  const [resdb, setResdb] = useState([]);
  const [all, setAll] = useState([]);

  const [textenter, setTextenter] = useState("");

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const resdata = await data.json();
    setAll(resdata.data.cards);
    setResdb(resdata.data.cards);
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const funcn = () => {
    const filtered = all.filter((r) => {
      return r?.card?.card?.info?.name
        .toLowerCase()
        .includes(textenter.toLowerCase());
    });
    setResdb(filtered);
  };
  const fn = () => {
    const topRes= all
      .filter(
        (f) =>
          f.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .filter((u) => u.card.card.info.avgRating >= 4.5);

      setResdb(topRes);
  };

  return (
    <div>
      <div className="flex h-25 color color bg-blue-200">
        <div className="px-10 py-10">
          <input
            className="color bg-amber-50 w-70"
            type="text"
            placeholder="Enter Your restaurant Name"
            value={textenter}
            onChange={(e) => setTextenter(e.target.value)}
          />
        </div>
        <button className="cursor-pointer" onClick={funcn}>
          Search
        </button>

        <button className="cursor-pointer mx-15" onClick={fn}>
          Top Restaurants
        </button>
      </div>
      <div className="flex  flex-wrap mx-10 m-5 py-8">
        {resdb
          .filter(
            (x) =>
              x.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )
          .map((y) => {
            return <Card details={y.card.card.info} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantCard;
