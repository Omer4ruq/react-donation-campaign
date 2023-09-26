import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import { list } from "postcss";
import Header from "../Header/Header";

const Donated = () => {
  const donations = useLoaderData();

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
      <Header></Header>
      <h2>i donated: {donationGiven.length}</h2>
      <h2>{donationGiven.title}</h2>
      <ul className="grid grid-cols-2 ">
        {donationGiven.map((donate) => (
          <li key={donate.id}>
            <div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={donate.picture} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{donate.category}</h2>
                  <h1>{donate.title}</h1>
                  <h1>{donate.price}</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <NavLink to="/detailspage" donate={donate}>
                        View Details
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donated;
