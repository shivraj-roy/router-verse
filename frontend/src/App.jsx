import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/events",
      element: <Event />,
   },
   {
      path: "/events/:id",
      element: <EventDetail />,
   },
   {
      path: "/events/new",
      element: <NewEvent />,
   },
   {
      path: "/events/:id/edit",
      element: <EditEvent />,
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
