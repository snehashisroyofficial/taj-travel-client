import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return <div>hello {user}</div>;
};

export default ViewDetails;
