import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard.jsx";
import { productData } from "../../static/data.js";

const Events = () => {
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events</h1>
        </div>

        <div className="w-full grid">
          <EventCard />
        </div>
        {/* <>
          {productData &&
            productData.map((i, index) => <EventCard data={i} key={index} />)}
        </> */}
      </div>
    </div>
  );
};

export default Events;
