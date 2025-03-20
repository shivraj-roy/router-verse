import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const Event = () => {
   const data = useLoaderData();

   return (
      <>
         <EventsList events={data} />
      </>
   );
};

export default Event;

export const eventLoader = async () => {
   const response = await fetch("http://localhost:8080/events");
   if (!response.ok) {
      return { message: "Failed to fetch events." };
   } else {
      const data = await response.json();
      return data.events;
   }
};
