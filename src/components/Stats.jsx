import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="p-6  ">
      <h1 className="text-3xl font-bold text-center ">Our Stats</h1>
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 py-10">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={25000} duration={5} />
          </p>
          <p className="text-sm sm:text-base">Clients</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={89000} duration={5} />
          </p>
          <p className="text-sm sm:text-base">Followers on social media</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={15} duration={10} />
          </p>
          <p className="text-sm sm:text-base">Published books</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={56} duration={6} />
          </p>
          <p className="text-sm sm:text-base">TED talks</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={22} duration={8} />
          </p>
          <p className="text-sm sm:text-base">Years of experience</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp start={0} end={200} duration={4} suffix="+" />
          </p>
          <p className="text-sm sm:text-base">Tours</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
