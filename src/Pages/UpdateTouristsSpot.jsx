import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristsSpot = () => {
  const data = useLoaderData();
  const {
    average_cost,
    country_name,
    description,

    image_url,
    location,

    options,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
    _id,
  } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://taj-travel-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Data updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-screen flex justify-center items-center">
          <div className="max-w-3xl w-full space-y-6  p-10">
            <h1 className="text-2xl font-bold text-center">
              Update Tourists Spot
            </h1>

            {/* cols 1 */}
            <div className="flex justify-between gap-3  ">
              <div className="w-1/2">
                <label htmlFor="url" className="block mb-2 text-sm">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  id="url"
                  defaultValue={image_url}
                  placeholder="https://"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("image_url", { required: true })}
                />
                {errors.image_url && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="tourists_spot_name"
                  className="block mb-2 text-sm"
                >
                  Tourists Spot Name
                </label>
                <input
                  type="text"
                  name="tourists_spot_name"
                  id="tourists_spot_name"
                  defaultValue={tourists_spot_name}
                  placeholder="Enter tourists spot name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("tourists_spot_name", { required: true })}
                />
                {errors.tourists_spot_name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* cols 2 */}
            <div className="flex justify-between gap-3 ">
              <div className="w-1/2">
                <label htmlFor="url" className="block mb-2 text-sm">
                  Country Name
                </label>
                <input
                  type="text"
                  name="country_name"
                  id="country_name"
                  defaultValue={country_name}
                  placeholder="country name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("country_name", { required: true })}
                />
                {errors.image_url && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="location" className="block mb-2 text-sm">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  defaultValue={location}
                  placeholder="Type Location"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* cols 3 */}

            <div className="flex  gap-3 ">
              <div className="w-1/2">
                <label htmlFor="average_cost" className="block mb-2 text-sm">
                  Average Cost
                </label>
                <input
                  type="text"
                  name="average_cost"
                  id="average_cost"
                  defaultValue={average_cost}
                  placeholder="average cost"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("average_cost", { required: true })}
                />
                {errors.average_cost && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="options" className="block mb-2 text-sm">
                  Seasonality
                </label>
                <select
                  className=" px-3 py-2 border rounded-md border-gray-300  text-gray-800 text-sm   bg-gray-50 w-full"
                  name="options"
                  id="options"
                  defaultValue={options}
                  {...register("options", { required: true })}
                >
                  <option value="" disabled selected>
                    Please choose any one
                  </option>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                </select>
                {errors.options && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* cols 4 */}

            <div className="flex justify-between gap-3 ">
              <div className="w-1/2">
                <label htmlFor="travel_time" className="block mb-2 text-sm">
                  Travel Time
                </label>
                <input
                  type="number"
                  name="travel_time"
                  id="travel_time"
                  defaultValue={travel_time}
                  placeholder="Example: 7"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("travel_time", { required: true })}
                />
                {errors.travel_time && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="total_visitors_per_year"
                  className="block mb-2 text-sm"
                >
                  Total Visitors Per Year
                </label>
                <input
                  type="number"
                  name="total_visitors_per_year"
                  id="total_visitors_per_year"
                  defaultValue={total_visitors_per_year}
                  placeholder="visitors per year"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 text-sm"
                  {...register("total_visitors_per_year", { required: true })}
                />
                {errors.total_visitors_per_year && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* cols 5 */}
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Short Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full  bg-gray-50 text-gray-800 text-sm"
                name="description"
                defaultValue={description}
                rows={6}
                placeholder="Type here...."
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* cols 7 */}
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTouristsSpot;
