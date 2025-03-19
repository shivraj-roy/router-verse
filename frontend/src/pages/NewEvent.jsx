import React from "react";

const NewEvent = () => {
   return (
      <div className="new-event-container">
         <h1>Create New Event</h1>
         <form className="event-form">
            {/* Event creation form will be rendered here */}
            <div className="form-group">
               <label htmlFor="eventName">Event Name</label>
               <input type="text" id="eventName" name="eventName" />
            </div>
         </form>
      </div>
   );
};

export default NewEvent;
