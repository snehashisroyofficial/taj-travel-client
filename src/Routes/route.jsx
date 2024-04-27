import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Shared/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCountries from "../components/AddCountries";
import ViewDetails from "../Pages/ViewDetails";
import CountriesList from "../Pages/CountriesList";

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
        loader: () => fetch("http://localhost:5000/alltouristsspot"),
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
      {
        path: "/viewdetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/viewdetails/${params.id}`),
      },
      {
        path: "/country/:countryname",
        element: <CountriesList />,
        loader: () => fetch("http://localhost:5000/alltouristsspot"),
      },
    ],
  },
]);

export default router;
