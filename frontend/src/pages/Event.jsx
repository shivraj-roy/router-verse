import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
   { id: "e1", title: "Event 1" },
   { id: "e2", title: "Event 2" },
   { id: "e3", title: "Event 3" },
];

const Event = () => {
   return (
      <div className="event-container">
         <h1>Events</h1>
         <div className="events-list">
            {DUMMY_EVENTS.map((event) => (
               <li key={event.id}>
                  <Link to={event.id}>{event.title}</Link>
               </li>
            ))}
         </div>
      </div>
   );
};

export default Event;
