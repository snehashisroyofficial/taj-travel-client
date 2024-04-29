import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
        fetch(`http://localhost:5000/touristsspot/${id}`, {
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
    <div className="flex justify-center items-center min-h-[calc(100vh-78px)]">
      <table className=" border-2 ">
        <thead className="rounded-t-lg font-semibold text-base-content bg-base-200">
          <tr className="text-center">
            <th title="Ranking" className="p-3 text-center text-base-content">
              No.
            </th>
            <th title="Ranking" className="p-3 text-center">
              Spot Name
            </th>
            <th title="Ranking" className="p-3 text-center">
              Country
            </th>
            <th title="Ranking" className="p-3 text-center">
              Cost
            </th>
            <th title="Ranking" className="p-3 text-center">
              Seasonality
            </th>
            <th title="Ranking" className="p-3 text-center">
              Travel Time
            </th>
            <th title="Ranking" className="p-3 text-center">
              Visitor/year
            </th>
            <th title="Ranking" className="p-3 text-center">
              Update
            </th>
            <th title="Ranking" className="p-3 text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, idx) => {
            return (
              <tr key={item._id} className="text-center table-compact">
                <td className="px-3 py-2 text-center">
                  <span>{idx + 1}</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span>{item.tourists_spot_name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{item.country_name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>${item.average_cost}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{item.options}</span>
                </td>
                <td className="px-3 py-2 ">
                  <span>{item.travel_time} Days</span>
                </td>
                <td className="px-3 py-2">
                  <span>{item.total_visitors_per_year}/Year</span>
                </td>
                <td className="px-3 py-2">
                  <Link to={`/update/${item._id}`}>
                    <button className="p-2 rounded-xl bg-green-500 text-white">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 rounded-xl bg-red-500 text-white"
                  >
                    Delete
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
