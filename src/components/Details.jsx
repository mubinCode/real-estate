import { useLoaderData } from "react-router-dom";

const Details = () => {

  const property = useLoaderData()
  console.log(property)
  return (
    <div>
        <h2 className="text-3xl">Details coming soon..........</h2>
        <div className="w-3/4 mx-auto bg-yellow-600">
            <img className="w-1/2 mx-auto" src={property.image_url} alt="" srcset="" />
            </div>
    </div>
  );
};

export default Details;
