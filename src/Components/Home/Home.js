import React from "react";
import Event from "../Event/Event";
import "./Home.css";

const events = [
  {
    name: "Child Support",
    pic: "childSupport.png",
  },
  {
    name: "Baby Sit",
    pic: "babySit.png",
  },
  {
    name: "Bird House",
    pic: "birdHouse.png",
  },
  {
    name: "Clean Water",
    pic: "cleanWater.png",
  },
  {
    name: "Clearn Park",
    pic: "clearnPark.png",
  },
  {
    name: "Cloth Swap",
    pic: "clothSwap.png",
  },
  {
    name: "Drive Safety",
    pic: "driveSafety.png",
  },
  {
    name: "Food Charity",
    pic: "foodCharity.png",
  },
];

const Home = () => {
  return (
    <div className="container">
      {events.map((event) => (
        <Event event={event}></Event>
      ))}
    </div>
  );
};

export default Home;
