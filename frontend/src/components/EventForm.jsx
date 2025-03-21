import { useNavigate, Form, redirect } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ event, method }) {
   const navigate = useNavigate();
   function cancelHandler() {
      navigate("..");
   }

   return (
      <Form method={method.toUpperCase()} className={classes.form}>
         <p>
            <label htmlFor="title">Title</label>
            <input
               id="title"
               type="text"
               name="title"
               required
               defaultValue={event && event.title}
            />
         </p>
         <p>
            <label htmlFor="image">Image</label>
            <input
               id="image"
               type="url"
               name="image"
               required
               defaultValue={event && event.image}
            />
         </p>
         <p>
            <label htmlFor="date">Date</label>
            <input
               id="date"
               type="date"
               name="date"
               required
               defaultValue={event && event.date}
            />
         </p>
         <p>
            <label htmlFor="description">Description</label>
            <textarea
               id="description"
               name="description"
               rows="5"
               required
               defaultValue={event && event.description}
            />
         </p>
         <div className={classes.actions}>
            <button type="button" onClick={cancelHandler}>
               Cancel
            </button>
            <button>Save</button>
         </div>
      </Form>
   );
}

export default EventForm;

export const EventFormAction = async ({ request, params }) => {
   const method = request.method;
   const data = await request.formData();
   const eventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
   };

   let url = "http://localhost:8080/events";
   if (method === "PATCH") {
      const eventId = params.id;
      url = `${url}/${eventId}`;
   }

   const response = await fetch(url, {
      method: method,
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
   });

   if (!response.ok) {
      throw new Error("Could not save event.");
   }

   return redirect("/events");
};
