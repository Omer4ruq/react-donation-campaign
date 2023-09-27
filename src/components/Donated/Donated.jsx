import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import { list } from "postcss";
import Header from "../Header/Header";
import DetailsPage from "../detailsPage/DetailsPage";
import Listcard from "../Listcard/Listcard";

const Donated = () => {
  const donations = useLoaderData();

  const [dataLength, setDatalength] = useState(4);

  const [donationGiven, setDonationGiven] = useState([]);
  useEffect(() => {
    const donationIds = getStoredDonation();
    console.log(donationIds + "donationID");
    if (donations.length > 0) {
      // const givenDonation = donations.filter((id) => donationIds.includes(id));
      const givenDonation = [];
      for (const id of donationIds) {
        const donate = donations.find((donate) => donate.id == id);
        console.log(id + " loopID");
        if (donate) {
          givenDonation.push(donate);
          console.log(donate + " donate");
        }
      }
      setDonationGiven(givenDonation);
      console.log(donationGiven + "hh");
      //   console.log(donations, donationId, givenDonation);
    }
  }, []);
  return (
    <div>
      <h2>i donated: {donationGiven.length}</h2>
      <h2>{donationGiven.title}</h2>
      <ul className="grid grid-cols-2 gap-3">
        {donationGiven.slice(0, dataLength).map((donate) => (
          <DetailsPage key={donate.id} donate={donate}></DetailsPage>
        ))}
      </ul>
      <div className=" text-center  mt-4">
        <div className={dataLength === donationGiven.length && "hidden"}>
          <button
            onClick={() => setDatalength(donationGiven.length)}
            className="btn btn-secondary bg-green-700"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donated;
