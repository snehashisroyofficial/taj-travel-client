import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddCountries = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const country_name = form.text.value;
    const image_url = form.url.value;
    const country_description = form.description.value;
    const data = { country_name, image_url, country_description };

    fetch("https://taj-travel-server.vercel.app/country", {
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
          title: "Country Added!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    form.reset();
  };

  return (
    <form data-aos="zoom-out-up" onSubmit={handleOnSubmit}>
      <Helmet>
        <title>Add Countries</title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-xl w-full space-y-4 border-2 p-6">
          <h1 className="text-2xl font-bold text-center">Add Countries</h1>
          <div>
            <label htmlFor="text" className="block mb-2 text-sm">
              Country Name
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="example: Thailand"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="url" className="block mb-2 text-sm">
              Cover Image URL
            </label>
            <input
              type="url"
              name="url"
              id="url"
              placeholder="https://"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="text" className="block mb-2 text-sm">
              Country Name
            </label>
            <textarea
              className="textarea textarea-bordered w-full  bg-gray-50 text-gray-800"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Add Countries"
          />
        </div>
      </div>
    </form>
  );
};

export default AddCountries;
