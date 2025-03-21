import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
   const data = useRouteLoaderData("event-detail");
   console.log("Event data in EditEvent:", data); // Debug log
   return <EventForm event={data} method="PATCH" />;
};

export default EditEvent;
