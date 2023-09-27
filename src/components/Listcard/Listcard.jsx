import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../utility/localstorage";

const Listcard = () => {
  const donates = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const donate = donates.find((donate) => donate.id == idInt);
  console.log(donate);

  const handleDonation = () => {
    saveDonation(idInt);
    console.log(idInt);
  };

  // const { picture, category, title, price, id, description } = donate;
  return (
    <div>
      <div className="card w-full h- bg-base-100 shadow-xl relative ">
        <figure>
          <img className="w-8/12" src={donate.picture} alt="image" />
        </figure>
        <div className="bg-black bg-transparent">
          <button
            onClick={handleDonation}
            className="btn bg-red-500 border-none ml-72 mb-52 -mt-20 absolute"
          >
            Donate: {donate.price}
          </button>

          <div className="card-body ml-48">
            <h1 className="text-4xl font-bold">{donate.category}</h1>
            <p className="text-xs">{donate.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
