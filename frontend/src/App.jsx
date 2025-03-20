import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRootLayout";
const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
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
                  loader: async () => {
                     const response = await fetch(
                        "http://localhost:8080/events"
                     );
                     if (!response.ok) {
                        throw new Response(
                           JSON.stringify({
                              message: "Failed to fetch events.",
                           }),
                           {
                              status: 500,
                           }
                        );
                     } else {
                        const data = await response.json();
                        return data.events;
                     }
                  },
               },
               {
                  path: ":id",
                  element: <EventDetail />,
               },
               {
                  path: "new",
                  element: <NewEvent />,
               },
               {
                  path: ":id/edit",
                  element: <EditEvent />,
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
