import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const MyList = () => {
  const { user, loading } = useAuth();
  const userEmail = user?.email;
  const card = useLoaderData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(card);
  }, []);

  const filterData = cards.filter((item) => item.email === userEmail);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://taj-travel-server.vercel.app/touristsspot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingUsers = cards.filter((item) => item._id !== id);
            setCards(remainingUsers);
            console.log(data);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (filterData.length === 0) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <h1 className="text-3xl font-bold">No Data Available!</h1>
      </div>
    );
  }

  return (
    <div
      data-aos="zoom-in-up"
      className="h-screen flex justify-center items-center"
    >
      <Helmet>
        <title>My Lists</title>
      </Helmet>
      <table className="table table-xs lg:table-lg table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Spot Name</th>
            <th>Country</th>
            <th>Cost</th>
            <th className="hidden sm:table-cell">Seasonality</th>
            <th className="hidden sm:table-cell">Travel Time</th>
            <th className="hidden sm:table-cell">Visitor/year</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.tourists_spot_name}</td>
                <td>{item.country_name}</td>
                <td>${item.average_cost}</td>
                <td className="hidden sm:table-cell">{item.options}</td>
                <td className="hidden sm:table-cell">
                  {item.travel_time} Days
                </td>
                <td className="hidden sm:table-cell">
                  {item.total_visitors_per_year}/Year
                </td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    <button className="p-2 rounded-full bg-green-500 text-white">
                      <FaPencil />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 rounded-full bg-red-500 text-white"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
