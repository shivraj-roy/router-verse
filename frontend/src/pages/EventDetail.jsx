import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
   const data = useRouteLoaderData("event-detail");

   return (
      <>
         <EventItem event={data} />
      </>
   );
};

export default EventDetail;

export const eventDetailLoader = async ({ params }) => {
   const eventId = params.id;
   const response = await fetch(`http://localhost:8080/events/${eventId}`);
   if (!response.ok) {
      throw new Response(
         JSON.stringify({ message: "Failed to fetch event." }),
         {
            status: 500,
         }
      );
   } else {
      const data = await response.json();
      return data.event;
   }
};
