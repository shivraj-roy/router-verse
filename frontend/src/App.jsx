import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Event, { eventLoader } from "./pages/Event";
import EventDetail, { eventDetailLoader } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";
import { EventFormAction } from "./components/EventForm";
import { eventDetailAction } from "./pages/EventDetail";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "events",
            element: <EventsRootLayout />,
            children: [
               {
                  index: true,
                  element: <Event />,
                  loader: eventLoader,
               },
               {
                  path: ":id",
                  id: "event-detail",
                  loader: eventDetailLoader,
                  children: [
                     {
                        index: true,
                        element: <EventDetail />,
                        action: eventDetailAction,
                     },
                     {
                        path: "edit",
                        element: <EditEvent />,
                        action: EventFormAction,
                     },
                  ],
               },
               {
                  path: "new",
                  element: <NewEvent />,
                  action: EventFormAction,
               },
            ],
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
