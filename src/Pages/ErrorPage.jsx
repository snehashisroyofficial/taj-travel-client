import { Link } from "react-router-dom";
import errorImage from "../assets/Animation - 1712769249445 (1).json";
import Lottie from "react-lottie";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorImage,
  };

  return (
    <section className="flex items-center min-h-dvh p-16 bg-gray-50 text-gray-800">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Lottie options={defaultOptions} />

          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-green-600 text-gray-50"
            >
              Back to homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
