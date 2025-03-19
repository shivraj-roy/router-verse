import React from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {
   const { id } = useParams();

   return (
      <div className="edit-event-container">
         <h1>Edit Event</h1>
         <form className="event-form">
            {/* Event edit form will be rendered here */}
            <div className="form-group">
               <label htmlFor="eventName">Event Name</label>
               <input type="text" id="eventName" name="eventName" />
            </div>
            <p>Editing Event ID: {id}</p>
         </form>
      </div>
   );
};

export default EditEvent;
