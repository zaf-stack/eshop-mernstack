import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";

const EventsPage = () => {
  return (
    <>
      <Header />
      <EventCard active={true} />
      <EventCard active={true} />
    </>
  );
};

export default EventsPage;
