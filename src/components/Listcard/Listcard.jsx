import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../utility/localstorage";
import Swal from "sweetalert2";
const Listcard = () => {
  const donates = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const donate = donates.find((donate) => donate.id == idInt);
  console.log(donate);

  const handleDonation = () => {
    saveDonation(idInt);
    console.log(idInt);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Donation has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // const { picture, category, title, price, id, description } = donate;
  return (
    <div>
      <div className="card w-full h- bg-base-100 shadow-xl relative ">
        <figure>
          <img className="w-8/12" src={donate.picture} alt="image" />
        </figure>
        <div>
          <div className="">
            <button
              onClick={handleDonation}
              style={{ background: donate.category_bg }}
              className="btn btn-secondary border-none ml-72 mb-52 -mt-20 absolute"
            >
              Donate: {donate.price}
            </button>
          </div>
          <div className="card-body ml-48">
            <h1 className="text-4xl font-bold">{donate.category}</h1>
            <p className="text-sm">{donate.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
