import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Shared/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCountries from "../components/AddCountries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addtouristsspot",
        element: <AddTouristsSpot />,
      },
      {
        path: "/alltouristsspot",
        element: <AllTouristsSpot />,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addcountries",
        element: <AddCountries />,
      },
    ],
  },
]);

export default router;
