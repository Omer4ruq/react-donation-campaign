import { NavLink, useParams } from "react-router-dom";
import { saveDonation } from "../../utility/localstorage";
import { parse } from "postcss";
import Listcard from "../Listcard/Listcard";

const DonationCard = ({ donation }) => {
  const { picture, category, title, card_bg, id, text_button_bg, category_bg } =
    donation;
  // const { id } = useParams();
  // console.log(id + "pp");

  const idInt = parseInt(id);

  // const handleDonation = () => {
  //   saveDonation(idInt);
  //   console.log(idInt);
  // };

  return (
    <NavLink to={`/listcard/${id}`}>
      <div style={{ backgroundColor: card_bg, width: 300 }}>
        <div className="bg-opacity-50 ">
          <div>
            <figure>
              <img className=" w-auto" src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2
                style={{
                  backgroundColor: text_button_bg,
                  width: 100,
                  color: category_bg,
                }}
                className="card-title items-center pl-1"
              >
                {category}
              </h2>
              <p className="font-semibold text-xl">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default DonationCard;
