import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ReviewAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://taj-travel-server.vercel.app/reviewadd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Review Added!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    reset();
  };

  return (
    <form data-aos="zoom-out-up" onSubmit={handleSubmit(onSubmit)}>
      <Helmet>
        <title>Add Reviews</title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-xl w-full space-y-4 border-2 p-6">
          <h1 className="text-2xl font-bold text-center">Client Review Add</h1>
          <div className="w-1/2">
            <label htmlFor="ratings" className="block mb-2 text-sm">
              Ratings
            </label>
            <select
              className=" px-3 py-2 border rounded-md border-gray-300  text-gray-800 text-sm   bg-gray-50 w-full"
              name="ratings"
              id="ratings"
              {...register("ratings", { required: true })}
            >
              <option value="" disabled selected>
                Please choose any one
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.ratings && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="text" className="block mb-2 text-sm">
              Review
            </label>
            <textarea
              className="textarea textarea-bordered w-full  bg-gray-50 text-gray-800 text-sm"
              name="description"
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
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Add Review"
          />
        </div>
      </div>
    </form>
  );
};

export default ReviewAdd;
