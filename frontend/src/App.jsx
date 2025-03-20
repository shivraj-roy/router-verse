import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Event, { eventLoader } from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";

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
