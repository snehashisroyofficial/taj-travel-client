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
import UpdateTouristsSpot from "../Pages/UpdateTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import ReviewAdd from "../Pages/ReviewAdd";
import ContactUs from "../components/FooterContent/ContactUs";
import AboutUs from "../components/FooterContent/AboutUs";
import Disclaimer from "../components/FooterContent/Disclaimer";
import PrivacyPolicy from "../components/FooterContent/PrivacyPolicy";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addtouristsspot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
        loader: () => fetch("https://taj-travel-server.vercel.app/country"),
      },
      {
        path: "/alltouristsspot",
        element: <AllTouristsSpot />,
      },
      {
        path: "/mylist",
        element: <MyList />,
        loader: () =>
          fetch("https://taj-travel-server.vercel.app/alltouristsspot"),
      },
      {
        path: "/update/:id",
        element: <UpdateTouristsSpot />,
        loader: ({ params }) =>
          fetch(
            `https://taj-travel-server.vercel.app/viewdetails/${params.id}`
          ),
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
        element: (
          <PrivateRoute>
            <AddCountries />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://taj-travel-server.vercel.app/viewdetails/${params.id}`
          ),
      },
      {
        path: "/country/:countryname",
        element: (
          <PrivateRoute>
            <CountriesList />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taj-travel-server.vercel.app/alltouristsspot"),
      },
      {
        path: "/reviewadd",
        element: <ReviewAdd />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;
