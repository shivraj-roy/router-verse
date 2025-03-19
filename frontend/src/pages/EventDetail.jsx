import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
   const { id } = useParams();

   return (
      <div className="event-detail-container">
         <h1>Event Details</h1>
         <div className="event-detail">
            {/* Event details will be rendered here */}
            <p>Event ID: {id}</p>
         </div>
      </div>
   );
};

export default EventDetail;
