import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className=" text-gray-800 flex items-center justify-center h-dvh w-full "
      data-aos="fade-up"
    >
      {/* <Helmet>
        <title>Contact us</title>
      </Helmet> */}
      <form
        noValidate=""
        className="container w-full h-fit max-w-xl p-8 mx-auto space-y-6 rounded-md  bg-gray-50"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-600 bg-gray-100"
            data-gramm="false"
            wt-ignore-input="true"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-600 focus:ring-green-600 hover:ring-green-600 text-gray-50"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
