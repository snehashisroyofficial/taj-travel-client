import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full flex items-center  ">
      <Helmet>
        <title>About us</title>
      </Helmet>
      <div className="space-y-8 md:text-lg" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center">
          About Us: Helping You Find Your Perfect Place
        </h1>

        <section className="space-y-4">
          <p>
            At Taj Travel, we're passionate about travel and making the journey
            planning process seamless for you. Whether you're a solo traveler, a
            family, or a group of friends, we're here to guide you through every
            step of your adventure.
          </p>
          <p>
            <span className="font-bold">Our Story:</span>{" "}
            <span>
              Taj Travel was founded in 2024 with a vision to provide
              unforgettable travel experiences and exceptional service to our
              clients. We understand the excitement and challenges of exploring
              new destinations, and we strive to create memorable journeys for
              everyone.
            </span>
          </p>
          <p>
            <span className="font-bold">Our Mission and Vision:</span>{" "}
            <span>
              Our mission is to inspire and empower travelers to discover the
              world with confidence and ease. We achieve this by offering
              personalized travel solutions, expert advice from our dedicated
              team, and a commitment to customer satisfaction. We envision a
              future where travel is accessible to all and enriches lives.
            </span>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc space-y-8">
            <li>
              <span className="font-bold">Expert Tour Guides:</span> Explore
              destinations with our knowledgeable tour guides who provide
              insights into local culture, history, and hidden gems.
            </li>
            <li>
              <span className="font-bold">Customized Travel Plans:</span> Tailor
              your itinerary to suit your interests and preferences, ensuring a
              personalized and unforgettable journey.
            </li>
            <li>
              <span className="font-bold">Exceptional Customer Service:</span>{" "}
              From booking inquiries to on-trip support, our team is dedicated
              to providing prompt and friendly assistance every step of the way.
            </li>
            <li>
              <span className="font-bold">Safety and Comfort:</span> Your safety
              and comfort are our top priorities, and we ensure that all our
              tours and accommodations meet the highest standards.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl">
            Ready to embark on your next adventure? Let's connect!
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-2xl" />
              <p>snehashisroyofficial@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <GrMapLocation className="text-2xl" />
              <p>Taj Travel, Barrackpore, Kolkata, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
