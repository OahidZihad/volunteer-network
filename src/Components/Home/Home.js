import React, { useState, useEffect } from "react";
import Event from "../Event/Event";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="container">
      {events.map((event) => (
        <Event event={event}></Event>
      ))}
    </div>
  );
};

export default Home;
