import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return <div>hello {user.country_name}</div>;
};

export default ViewDetails;
